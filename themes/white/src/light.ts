import { tags as t } from '@lezer/highlight';
import { createTheme, type CreateThemeOptions } from '@uiw/codemirror-themes';
import { config as c } from './light-color';

export const defaultSettingsWhiteLight: CreateThemeOptions['settings'] = {
  background: c.background,
  foreground: c.foreground,
  caret: c.cursor,
  selection: c.selection,
  selectionMatch: c.selectionMatch,
  gutterBackground: c.background,
  gutterForeground: c.foreground,
  lineHighlight: c.activeLine,
};

export const whiteLightStyle: CreateThemeOptions['styles'] = [
  { tag: t.keyword, color: c.keyword, fontWeight: 'bold' },
  { tag: [t.name, t.deleted, t.character, t.macroName], color: c.variable },
  { tag: [t.propertyName], color: c.function },
  { tag: [t.processingInstruction, t.string, t.inserted, t.special(t.string)], color: c.string },
  { tag: [t.function(t.variableName), t.labelName], color: c.function },
  { tag: [t.color, t.constant(t.name), t.standard(t.name)], color: c.constant },
  { tag: [t.definition(t.name), t.separator], color: c.variable },
  { tag: [t.className], color: c.class },
  { tag: [t.typeName], color: c.type, fontStyle: c.type },
  { tag: [t.url, t.escape, t.regexp, t.link], color: c.regexp },
  { tag: [t.meta, t.comment], color: c.comment },
  { tag: t.tagName, color: c.tag },
  { tag: t.strong, fontWeight: 'bold' },
  { tag: t.emphasis, fontStyle: 'italic' },
  { tag: t.link, textDecoration: 'underline' },
  { tag: t.heading, fontWeight: 'bold', color: c.heading },
  { tag: [t.atom, t.special(t.variableName)], color: c.variable },
  { tag: t.invalid, color: c.invalid },
  { tag: t.strikethrough, textDecoration: 'line-through' },
  {
    tag: [t.operatorKeyword, t.bool, t.null, t.variableName],
    color: c.constant,
  },
  { tag: [t.operator], color: '#0431fa' },
  { tag: [t.number], color: '#a8a8b1' },
  { tag: [t.bracket], color: '#0431fa' },
];

export const whiteLightInit = (options?: Partial<CreateThemeOptions>) => {
  const { theme = 'light', settings = {}, styles = [] } = options || {};
  return createTheme({
    theme: theme,
    settings: {
      ...defaultSettingsWhiteLight,
      ...settings,
    },
    styles: [...whiteLightStyle, ...styles],
  });
};

export const whiteLight = whiteLightInit();
