// gen-langs-map.cjs
// 将 CodeMirror 的 languages 配置（含动态 import/legacy/sql 包装）
// 生成一个静态打包用的映射：扩展名 -> 对应加载函数
// 运行：node gen-langs-map.cjs input.js > langs.generated.ts

const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;

const inputPath = process.argv[2];
if (!inputPath) {
  console.error('Usage: node gen-langs-map.cjs <input.js>');
  process.exit(1);
}
const src = fs.readFileSync(inputPath, 'utf8');

const ast = parser.parse(src, {
  sourceType: 'unambiguous',
  plugins: ['dynamicImport']
});

function getProp(node, name) {
  if (!node || node.type !== 'ObjectExpression') return null;
  for (const p of node.properties) {
    if ((p.key?.name || p.key?.value) === name) return p;
  }
  return null;
}

function litStr(node) {
  return node && node.type === 'StringLiteral' ? node.value : null;
}

function arrStrs(propNode) {
  if (!propNode) return [];
  const val = propNode.value || propNode; // ObjectProperty vs direct
  const arr = val.type === 'ArrayExpression' ? val : val.value;
  if (!arr || arr.type !== 'ArrayExpression') return [];
  return arr.elements
    .map(e => (e && e.type === 'StringLiteral' ? e.value : null))
    .filter(Boolean);
}

function findReturnArg(fn) {
  // ObjectMethod / ObjectProperty(FunctionExpression/ArrowFunctionExpression)
  if (!fn) return null;
  if (fn.type === 'ObjectMethod') {
    const ret = (fn.body.body || []).find(s => s.type === 'ReturnStatement');
    return ret?.argument || null;
  }
  if (fn.type === 'ObjectProperty') {
    const v = fn.value;
    if (v.type === 'ArrowFunctionExpression' || v.type === 'FunctionExpression') {
      if (v.body.type === 'BlockStatement') {
        const ret = (v.body.body || []).find(s => s.type === 'ReturnStatement');
        return ret?.argument || null;
      }
      return v.body; // concise arrow body
    }
  }
  return null;
}

// 记录导入：按模块聚合命名导入；以及通配(* as)导入
const namedImports = new Map(); // module -> Set(symbol)
const starImports = new Map();  // module -> alias
let needsStreamLanguage = false;

function addNamed(module, sym) {
  if (!namedImports.has(module)) namedImports.set(module, new Set());
  namedImports.get(module).add(sym);
}
function addStar(module, alias) {
  starImports.set(module, alias);
}

function codeFrom(node) {
  return generate(node, { concise: true }).code;
}

function parseLoadSpec(loadNode) {
  // 可能是： import('pkg').then(m => m.xxx(...))
  //       或  import('pkg').then(m => legacy(m.xxx(...)))
  //       或  sql("Dialect")
  //       或  直接 return legacy(m.xyz)（几乎不会，但兼容）
  if (!loadNode) return null;

  // sql("DialectName")
  if (loadNode.type === 'CallExpression' && loadNode.callee?.name === 'sql') {
    const dialect = litStr(loadNode.arguments[0]);
    if (!dialect) return null;
    addStar('@codemirror/lang-sql', 'SQL');
    return { kind: 'sql', dialect };
  }

  // import('pkg').then(arrow)
  if (
    loadNode.type === 'CallExpression' &&
    loadNode.callee?.type === 'MemberExpression' &&
    loadNode.callee.property?.name === 'then'
  ) {
    const importCall = loadNode.callee.object;
    if (
      importCall?.type === 'CallExpression' &&
      importCall.callee?.type === 'Import'
    ) {
      const modArg = importCall.arguments[0];
      const modulePath = litStr(modArg);
      const thenArg = loadNode.arguments[0];
      // then(m => <expr>)
      let body = thenArg?.type === 'ArrowFunctionExpression' ? thenArg.body : null;
      if (!body) return null;

      // legacy(m.xxx(...)) or legacy(m.xxx)
      if (body.type === 'CallExpression' && body.callee?.name === 'legacy') {
        needsStreamLanguage = true;
        const inner = body.arguments[0];
        if (inner?.type === 'MemberExpression') {
          const symbol = inner.property.name || inner.property.value;
          addNamed(modulePath, symbol);
          return { kind: 'legacy', modulePath, symbol, call: false, args: [] };
        }
        if (inner?.type === 'CallExpression' && inner.callee.type === 'MemberExpression') {
          const symbol = inner.callee.property.name || inner.callee.property.value;
          const args = inner.arguments.map(a => codeFrom(a));
          addNamed(modulePath, symbol);
          return { kind: 'legacy', modulePath, symbol, call: true, args };
        }
        return null;
      }

      // m.xxx(...) 或 m.xxx
      if (body.type === 'CallExpression' && body.callee?.type === 'MemberExpression') {
        const symbol = body.callee.property.name || body.callee.property.value;
        const args = body.arguments.map(a => codeFrom(a));
        addNamed(modulePath, symbol);
        return { kind: 'modern', modulePath, symbol, args };
      }
      if (body.type === 'MemberExpression') {
        const symbol = body.property.name || body.property.value;
        addNamed(modulePath, symbol);
        return { kind: 'modern', modulePath, symbol, args: [] };
      }
    }
  }

  // 兜底：可能直接 legacy(m.xxx)
  if (loadNode.type === 'CallExpression' && loadNode.callee?.name === 'legacy') {
    needsStreamLanguage = true;
    const inner = loadNode.arguments[0];
    if (inner?.type === 'MemberExpression') {
      const symbol = inner.property.name || inner.property.value;
      // 模块不详，无法导入
      return { kind: 'legacy', modulePath: null, symbol, call: false, args: [] };
    }
  }

  return null;
}

let languagesArray = null;

traverse(ast, {
  VariableDeclarator(path) {
    const id = path.node.id;
    if (id.type === 'Identifier' && id.name === 'languages') {
      if (path.node.init && path.node.init.type === 'ArrayExpression') {
        languagesArray = path.node.init;
      }
    }
  }
});

if (!languagesArray) {
  console.error('未找到变量 `languages` 的数组定义。');
  process.exit(1);
}

const entries = []; // [{ext, expr}]
for (const el of languagesArray.elements) {
  if (!el) continue;
  // 期望是 language.LanguageDescription.of({ ... })
  if (el.type !== 'CallExpression') continue;

  // 取对象参数
  const obj = el.arguments?.[0];
  if (!obj || obj.type !== 'ObjectExpression') continue;

  const exts = arrStrs(getProp(obj, 'extensions')); // 只用 extensions 做键
  if (!exts.length) continue; // 没有扩展名就无法生成键（例如 Dockerfile/Nginx 等）

  // load 方法
  const loadProp = getProp(obj, 'load');
  const retArg = findReturnArg(loadProp);
  const spec = parseLoadSpec(retArg);

  if (!spec) continue;

  // 生成每个扩展名对应的表达式字符串
  for (const ext of exts) {
    let expr;
    if (spec.kind === 'sql') {
      // 例如： () => SQL.sql({ dialect: SQL.SQLite })
      expr = `() => SQL.sql({ dialect: SQL.${spec.dialect} })`;
    } else if (spec.kind === 'modern') {
      // 例如： () => javascript({ jsx: true })
      const callArgs = spec.args.length ? `(${spec.args.join(',')})` : '()';
      expr = `() => ${spec.symbol}${callArgs}`;
    } else if (spec.kind === 'legacy') {
      // 例如： () => StreamLanguage.define(perl) 或 define(asn1({}))
      const inner = spec.call
        ? `${spec.symbol}(${spec.args.join(',')})`
        : spec.symbol;
      expr = `() => StreamLanguage.define(${inner})`;
      if (spec.modulePath) {
        addNamed(spec.modulePath, spec.symbol);
      }
    } else {
      continue;
    }

    entries.push([ext, expr]);
  }
}

entries.push(['solidity', `() => solidity`]);
entries.push(['nix', `() => nix()`]);
entries.push(['svelte', `() => svelte()`]);

// 组装 import 语句
const importLines = [];
if (needsStreamLanguage) {
  importLines.push(`import { StreamLanguage, LanguageSupport } from '@codemirror/language';`);
}

for (const [mod, set] of namedImports) {
  if (mod === '@codemirror/lang-sql') continue; // 由星号导入覆盖
  const names = Array.from(set).sort();
  importLines.push(`import { ${names.join(', ')} } from '${mod}';`);
}
for (const [mod, alias] of starImports) {
  importLines.push(`import * as ${alias} from '${mod}';`);
}

importLines.push(`import { nix } from '@replit/codemirror-lang-nix';`);
importLines.push(`import { svelte } from '@replit/codemirror-lang-svelte';`);
importLines.push(`import { solidity } from '@replit/codemirror-lang-solidity';`);

// 去重 & 排序键
const mapObj = new Map();
for (const [k, v] of entries) mapObj.set(k, v); // 后者覆盖前者
const sorted = Array.from(mapObj.entries()).sort((a, b) => a[0].localeCompare(b[0]));

// 输出文件内容
let out = '';
out += `// auto-generated by gen-langs-map.cjs – DO NOT EDIT\n`;
out += importLines.join('\n') + (importLines.length ? '\n\n' : '');
out += `export const langs: Record<string, () => LanguageSupport | StreamLanguage<unknown>> = {\n`;
for (const [k, v] of sorted) {
  const key = /^[a-z0-9_+-]+$/i.test(k) ? k : JSON.stringify(k);
  out += `  ${JSON.stringify(k)}: ${v},\n`;
}
out += `};\n\n`;

out += `export const langNames = Object.keys(langs) as LanguageName[];\n\n`;
out += `export type LanguageName = keyof typeof langs;\n`;
out += `export function loadLanguage(name: LanguageName) {\n`;
out += `  return langs[name] ? langs[name]() : null;\n`;
out += `}\n`;

process.stdout.write(out);