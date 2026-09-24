const fs = require('node:fs');
const path = require('node:path');

const themesDir = path.resolve(__dirname, '..');

function packageName(specifier) {
  if (specifier.startsWith('@')) {
    return specifier.split('/').slice(0, 2).join('/');
  }
  return specifier.split('/')[0];
}

function runtimeImports(source) {
  const imports = new Set();
  const patterns = [
    /\bimport\s+(?:[^'";]+?\s+from\s+)?['"]([^'"]+)['"]/g,
    /\bexport\s+[^'";]+?\s+from\s+['"]([^'"]+)['"]/g,
    /\b(?:import|require)\s*\(\s*['"]([^'"]+)['"]\s*\)/g,
  ];

  for (const pattern of patterns) {
    for (const match of source.matchAll(pattern)) {
      if (!match[1].startsWith('.') && !path.isAbsolute(match[1])) {
        imports.add(match[1]);
      }
    }
  }
  return imports;
}

function javascriptFiles(directory) {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return javascriptFiles(entryPath);
    return entry.isFile() && entry.name.endsWith('.js') ? [entryPath] : [];
  });
}

const failures = [];
for (const entry of fs.readdirSync(themesDir, { withFileTypes: true })) {
  if (!entry.isDirectory() || entry.name.startsWith('_')) continue;

  const packageDir = path.join(themesDir, entry.name);
  const manifestPath = path.join(packageDir, 'package.json');
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  const declared = new Set([
    ...Object.keys(manifest.dependencies || {}),
    ...Object.keys(manifest.optionalDependencies || {}),
    ...Object.keys(manifest.peerDependencies || {}),
  ]);
  const outputFiles = [
    ...javascriptFiles(path.join(packageDir, 'esm')),
    ...javascriptFiles(path.join(packageDir, 'cjs')),
  ];

  for (const file of outputFiles) {
    const source = fs.readFileSync(file, 'utf8');
    for (const specifier of runtimeImports(source)) {
      const dependency = packageName(specifier);
      if (!declared.has(dependency)) {
        failures.push(`${entry.name}: ${path.relative(packageDir, file)} imports ${specifier}`);
      }
    }
  }
}

if (failures.length > 0) {
  console.error('Undeclared runtime dependencies found:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log('All built theme runtime imports are declared.');
}
