/**
 * https://github.com/uiwjs/react-codemirror/issues/409
 */
import { tags as t } from '@lezer/highlight';
import { createTheme, CreateThemeOptions } from '@uiw/codemirror-themes';

export function vscodeDarkInit(options?: CreateThemeOptions) {
  const { theme = 'dark', settings = {}, styles = [] } = options || {};
  return createTheme({
    theme: theme,
    settings: {
      background: '#1e1e1e',
      foreground: '#9cdcfe',
      caret: '#c6c6c6',
      selection: '#6199ff2f',
      selectionMatch: '#72a1ff59',
      lineHighlight: '#ffffff0f',
      gutterBackground: '#1e1e1e',
      gutterForeground: '#838383',
      gutterActiveForeground: '#fff',
      fontFamily: 'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',
      ...settings,
    },
    styles: [
      { tag: t.keyword, color: '#569cd6' },
      {
        tag: [t.controlKeyword, t.moduleKeyword],
        color: '#c586c0',
      },
      {
        tag: [t.name, t.deleted, t.character, t.macroName],
        color: '#9cdcfe',
      },
      {
        tag: [t.propertyName],
        color: '#9cdcfe',
      },

      { tag: [t.variableName, t.labelName], color: '#9cdcfe' },
      {
        tag: [t.color, t.constant(t.name), t.standard(t.name)],
        color: '#569cd6',
      },
      { tag: [t.definition(t.name)], color: '#9cdcfe' },
      {
        tag: [t.typeName, t.className, t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace],
        color: '#4ec9b0',
      },
      { tag: [t.tagName], color: '#569cd6' },
      {
        tag: [t.function(t.variableName), t.function(t.propertyName)],
        color: '#dcdcaa',
      },
      { tag: [t.number], color: '#b5cea8' },
      {
        tag: [t.operator, t.operatorKeyword, t.url, t.escape, t.regexp, t.link, t.special(t.string)],
        color: '#d4d4d4',
      },
      {
        tag: [t.regexp],
        color: '#d16969',
      },
      {
        tag: [t.special(t.string)],
        color: '#ce9178',
      },
      { tag: [t.meta, t.comment], color: '#6a9955' },
      { tag: [t.punctuation, t.separator], color: '#d4d4d4' },
      { tag: [t.angleBracket], color: '#808080' },
      { tag: t.special(t.brace), color: '#569cd6' },
      { tag: t.strong, fontWeight: 'bold' },
      { tag: t.emphasis, fontStyle: 'italic' },
      { tag: t.strikethrough, textDecoration: 'line-through' },
      { tag: t.link, color: '#6a9955', textDecoration: 'underline' },
      { tag: t.heading, fontWeight: 'bold', color: '#9cdcfe' },
      {
        tag: [t.atom, t.bool, t.special(t.variableName)],
        color: '#569cd6',
      },
      {
        tag: [t.processingInstruction, t.string, t.inserted],
        color: '#ce9178',
      },
      { tag: t.invalid, color: '#ff0000' },
      ...styles,
    ],
  });
}

export const vscodeDark = vscodeDarkInit();
