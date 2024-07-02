import { CreateThemeOptions } from '@uiw/codemirror-themes';
import { Style } from './';

export const defalutStyle: Style = {
  comment: '#787b80',
  lineComment: '',
  blockComment: '',
  docComment: '',
  name: '',
  typeDefinition: '#194a7b',
  typeName: '#194a7b',
  typeStandard: '',
  tagName: '#008a02',
  tagNameStandard: '',
  variableName: '#1a00db',
  variableNameDefinition: '',
  variableNameFunction: '',
  propertyName: '',
  propertyNameDefinition: '',
  propertyNameFunction: '',
  propertyNameSpecial: '',
  attributeName: '',
  attributeValue: '',
  className: '',
  classNameConstant: '',
  labelName: '',
  namespace: '',
  macroName: '',
  literal: '',
  string: '',
  stringSpecial: '',
  docString: '',
  character: '',
  number: '',
  integer: '',
  float: '',
  bool: '',
  regexp: '',
  escape: '',
  color: '',
  url: '',
  keyword: '',
  self: '',
  null: '',
  atom: '',
  unit: '',
  modifier: '',
  operatorKeyword: '',
  controlKeyword: '',
  definitionKeyword: '',
  moduleKeyword: '',
  operator: '',
  derefOperator: '',
  arithmeticOperator: '',
  logicOperator: '',
  bitwiseOperator: '',

  brace: '',
  angleBracket: '',

  compareOperator: '',
  updateOperator: '',
  definitionOperator: '',
  typeOperator: '',
  controlOperator: '',
  punctuation: '',
  separator: '',
  bracket: '',
  squareBracket: '',
  paren: '',
  content: '',
  heading: '',
  heading1: '',
  heading2: '',
  heading3: '',
  heading4: '',
  heading5: '',
  heading6: '',
  contentSeparator: '',
  list: '',
  quote: '',
  emphasis: '',
  strong: '',
  link: '',
  monospace: '',
  strikethrough: '',
  inserted: '',
  deleted: '',
  changed: '',
  invalid: '',
  meta: '',
  documentMeta: '',
  annotation: '',
  processingInstruction: '',
};

export type ThmeCodeStyle = Style & CreateThemeOptions['settings'] & { dark: CreateThemeOptions['theme'] };

export const themeCode = (styles: Partial<ThmeCodeStyle> = {}) => {
  const data: string[] = [];
  if (styles.comment) data.push(`{ tag: t.comment, color: '${styles.comment}' },`);
  if (styles.lineComment) data.push(`{ tag: t.lineComment, color: '${styles.lineComment}' },`);
  if (styles.blockComment) data.push(`{ tag: t.blockComment, color: '${styles.blockComment}' },`);
  if (styles.docComment) data.push(`{ tag: t.docComment, color: '${styles.docComment}' },`);
  if (styles.name) data.push(`{ tag: t.name, color: '${styles.name}' },`);
  if (styles.typeDefinition) data.push(`{ tag: t.definition(t.typeName), color: '${styles.typeDefinition}' },`);
  if (styles.typeName) data.push(`{ tag: t.typeName, color: '${styles.typeName}' },`);
  if (styles.typeStandard) data.push(`{ tag:  t.standard(t.typeName), color: '${styles.typeName}' },`);
  if (styles.tagName) data.push(`{ tag: t.tagName, color: '${styles.tagName}' },`);
  if (styles.tagNameStandard) data.push(`{ tag: t.standard(t.tagName), color: '${styles.tagNameStandard}' },`);
  if (styles.variableName) data.push(`{ tag: t.variableName, color: '${styles.variableName}' },`);
  if (styles.variableNameDefinition)
    data.push(`{ tag: t.definition(t.variableName), color: '${styles.variableNameDefinition}' },`);
  if (styles.variableNameFunction)
    data.push(`{ tag: t.function(t.variableName), color: '${styles.variableNameFunction}' },`);
  if (styles.propertyName) data.push(`{ tag: t.propertyName, color: '${styles.propertyName}' },`);
  if (styles.propertyNameFunction)
    data.push(`{ tag: t.function(t.propertyName), color: '${styles.propertyNameFunction}' },`);
  if (styles.propertyNameDefinition)
    data.push(`{ tag: t.definition(t.propertyName), color: '${styles.propertyNameDefinition}' },`);
  if (styles.propertyNameSpecial)
    data.push(`{ tag: t.special(t.propertyName), color: '${styles.propertyNameSpecial}' },`);
  if (styles.attributeName) data.push(`{ tag: t.attributeName, color: '${styles.attributeName}' },`);
  if (styles.className) data.push(`{ tag: t.className, color: '${styles.className}' },`);
  if (styles.classNameConstant) data.push(`{ tag: t.constant(t.className), color: '${styles.className}' },`);
  if (styles.labelName) data.push(`{ tag: t.labelName, color: '${styles.labelName}' },`);
  if (styles.namespace) data.push(`{ tag: t.namespace, color: '${styles.namespace}' },`);
  if (styles.macroName) data.push(`{ tag: t.macroName, color: '${styles.macroName}' },`);
  if (styles.literal) data.push(`{ tag: t.literal, color: '${styles.literal}' },`);
  if (styles.string) data.push(`{ tag: t.string, color: '${styles.string}' },`);
  if (styles.stringSpecial) data.push(`{ tag: t.special(t.string), color: '${styles.stringSpecial}' },`);
  if (styles.docString) data.push(`{ tag: t.docString, color: '${styles.docString}' },`);
  if (styles.character) data.push(`{ tag: t.character, color: '${styles.character}' },`);
  if (styles.attributeValue) data.push(`{ tag: t.attributeValue, color: '${styles.attributeValue}' },`);
  if (styles.number) data.push(`{ tag: t.number, color: '${styles.number}' },`);
  if (styles.integer) data.push(`{ tag: t.integer, color: '${styles.integer}' },`);
  if (styles.float) data.push(`{ tag: t.float, color: '${styles.float}' },`);
  if (styles.bool) data.push(`{ tag: t.bool, color: '${styles.bool}' },`);
  if (styles.regexp) data.push(`{ tag: t.regexp, color: '${styles.regexp}' },`);
  if (styles.escape) data.push(`{ tag: t.escape, color: '${styles.escape}' },`);
  if (styles.color) data.push(`{ tag: t.color, color: '${styles.color}' },`);
  if (styles.url) data.push(`{ tag: t.url, color: '${styles.url}' },`);
  if (styles.keyword) data.push(`{ tag: t.keyword, color: '${styles.keyword}' },`);
  if (styles.self) data.push(`{ tag: t.self, color: '${styles.self}' },`);
  if (styles.null) data.push(`{ tag: t.null, color: '${styles.null}' },`);
  if (styles.atom) data.push(`{ tag: t.atom, color: '${styles.atom}' },`);
  if (styles.unit) data.push(`{ tag: t.unit, color: '${styles.unit}' },`);
  if (styles.modifier) data.push(`{ tag: t.modifier, color: '${styles.modifier}' },`);
  if (styles.operatorKeyword) data.push(`{ tag: t.operatorKeyword, color: '${styles.operatorKeyword}' },`);
  if (styles.controlKeyword) data.push(`{ tag: t.controlKeyword, color: '${styles.controlKeyword}' },`);
  if (styles.definitionKeyword) data.push(`{ tag: t.definitionKeyword, color: '${styles.definitionKeyword}' },`);
  if (styles.moduleKeyword) data.push(`{ tag: t.moduleKeyword, color: '${styles.moduleKeyword}' },`);
  if (styles.operator) data.push(`{ tag: t.operator, color: '${styles.operator}' },`);
  if (styles.derefOperator) data.push(`{ tag: t.derefOperator, color: '${styles.derefOperator}' },`);
  if (styles.arithmeticOperator) data.push(`{ tag: t.arithmeticOperator, color: '${styles.arithmeticOperator}' },`);
  if (styles.logicOperator) data.push(`{ tag: t.logicOperator, color: '${styles.logicOperator}' },`);
  if (styles.logicOperator) data.push(`{ tag: t.bitwiseOperator, color: '${styles.logicOperator}' },`);
  if (styles.compareOperator) data.push(`{ tag: t.compareOperator, color: '${styles.compareOperator}' },`);
  if (styles.updateOperator) data.push(`{ tag: t.updateOperator, color: '${styles.updateOperator}' },`);
  if (styles.definitionOperator) data.push(`{ tag: t.definitionOperator, color: '${styles.definitionOperator}' },`);
  if (styles.typeOperator) data.push(`{ tag: t.typeOperator, color: '${styles.typeOperator}' },`);
  if (styles.controlOperator) data.push(`{ tag: t.controlOperator, color: '${styles.controlOperator}' },`);
  if (styles.punctuation) data.push(`{ tag: t.punctuation, color: '${styles.punctuation}' },`);
  if (styles.separator) data.push(`{ tag: t.separator, color: '${styles.separator}' },`);
  if (styles.bracket) data.push(`{ tag: t.bracket, color: '${styles.bracket}' },`);
  if (styles.angleBracket) data.push(`{ tag: t.angleBracket, color: '${styles.angleBracket}' },`);
  if (styles.squareBracket) data.push(`{ tag: t.squareBracket, color: '${styles.squareBracket}' },`);
  if (styles.paren) data.push(`{ tag: t.paren, color: '${styles.paren}' },`);
  if (styles.brace) data.push(`{ tag: t.brace, color: '${styles.brace}' },`);
  if (styles.content) data.push(`{ tag: t.content, color: '${styles.content}' },`);
  if (styles.heading) data.push(`{ tag: t.heading, color: '${styles.heading}' },`);
  if (styles.heading1) data.push(`{ tag: t.heading1, color: '${styles.heading1}' },`);
  if (styles.heading2) data.push(`{ tag: t.heading2, color: '${styles.heading2}' },`);
  if (styles.heading3) data.push(`{ tag: t.heading3, color: '${styles.heading3}' },`);
  if (styles.heading4) data.push(`{ tag: t.heading4, color: '${styles.heading4}' },`);
  if (styles.heading5) data.push(`{ tag: t.heading5, color: '${styles.heading5}' },`);
  if (styles.heading6) data.push(`{ tag: t.heading6, color: '${styles.heading6}' },`);
  if (styles.contentSeparator) data.push(`{ tag: t.contentSeparator, color: '${styles.contentSeparator}' },`);
  if (styles.list) data.push(`{ tag: t.list, color: '${styles.list}' },`);
  if (styles.quote) data.push(`{ tag: t.quote, color: '${styles.quote}' },`);
  if (styles.emphasis) data.push(`{ tag: t.emphasis, color: '${styles.emphasis}' },`);
  if (styles.strong) data.push(`{ tag: t.strong, color: '${styles.strong}' },`);
  if (styles.link) data.push(`{ tag: t.link, color: '${styles.link}' },`);
  if (styles.monospace) data.push(`{ tag: t.monospace, color: '${styles.monospace}' },`);
  if (styles.strikethrough) data.push(`{ tag: t.strikethrough, color: '${styles.strikethrough}' },`);
  if (styles.inserted) data.push(`{ tag: t.inserted, color: '${styles.inserted}' },`);
  if (styles.deleted) data.push(`{ tag: t.deleted, color: '${styles.deleted}' },`);
  if (styles.changed) data.push(`{ tag: t.changed, color: '${styles.changed}' },`);
  if (styles.invalid) data.push(`{ tag: t.invalid, color: '${styles.invalid}' },`);
  if (styles.meta) data.push(`{ tag: t.meta, color: '${styles.meta}' },`);
  if (styles.documentMeta) data.push(`{ tag: t.documentMeta, color: '${styles.documentMeta}' },`);
  if (styles.annotation) data.push(`{ tag: t.annotation, color: '${styles.annotation}' },`);
  if (styles.processingInstruction)
    data.push(`{ tag: t.processingInstruction, color: '${styles.processingInstruction}' },`);

  return `import CodeMirror from '@uiw/react-codemirror';
import { createTheme } from '@uiw/codemirror-themes';
import { javascript } from '@codemirror/lang-javascript';
import { tags as t } from '@lezer/highlight';

const myTheme = createTheme({
  theme: '${styles.dark}',
  settings: {
    background: '${styles.background}',
    backgroundImage: '',
    foreground: '${styles.foreground}',
    caret: '${styles.caret}',
    selection: '${styles.selection}',
    selectionMatch: '${styles.selectionMatch}',
    gutterBackground: '${styles.gutterBackground}',
    gutterForeground: '${styles.gutterForeground}',
    gutterBorder: '${styles.gutterBorder}',
    gutterActiveForeground: '${styles.gutterActiveForeground}',
    lineHighlight: '${styles.lineHighlight}',
  },
  styles: [
    ${data.join('\n    ')}
  ],
});

function App() {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      theme={myTheme}
      extensions={[javascript({ jsx: true })]}
      onChange={(value, viewUpdate) => {
        console.log('value:', value);
      }}
    />
  );
}
export default App;`;
};
