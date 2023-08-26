import { tags as t } from '@lezer/highlight';
import { createTheme, CreateThemeOptions } from '@uiw/codemirror-themes';
import { config } from './color';

export const defaultSettingsRed: CreateThemeOptions['settings'] = {
  background: config.background,
  foreground: config.foreground,
  caret: config.cursor,
  selection: config.selection,
  selectionMatch: config.selection,
  gutterBackground: config.background,
  gutterForeground: config.foreground,
  lineHighlight: config.activeLine,
};

export const redInit = (options?: Partial<CreateThemeOptions>) => {
  const { theme = 'dark', settings = {}, styles = [] } = options || {};
  return createTheme({
    theme: theme,
    settings: {
      ...defaultSettingsRed,
      ...settings,
    },
    styles: [
      { tag: t.keyword, color: config.keyword },
      { tag: [t.name, t.deleted, t.character, t.macroName], color: config.variable },
      { tag: [t.propertyName], color: config.function },
      { tag: [t.processingInstruction, t.string, t.inserted, t.special(t.string)], color: config.string },
      { tag: [t.function(t.variableName), t.labelName], color: config.function },
      { tag: [t.color, t.constant(t.name), t.standard(t.name)], color: config.constant },
      { tag: [t.definition(t.name), t.separator], color: config.variable },
      { tag: [t.className], color: config.class },
      { tag: [t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace], color: config.number },
      { tag: [t.typeName], color: config.type, fontStyle: config.type },
      { tag: [t.operator, t.operatorKeyword], color: config.keyword },
      { tag: [t.url, t.escape, t.regexp, t.link], color: config.regexp },
      { tag: [t.meta, t.comment], color: config.comment },
      { tag: t.tagName, color: config.tag },
      { tag: t.strong, fontWeight: 'bold' },
      { tag: t.emphasis, fontStyle: 'italic' },
      { tag: t.link, textDecoration: 'underline' },
      { tag: t.heading, fontWeight: 'bold', color: config.heading },
      { tag: [t.atom, t.bool, t.special(t.variableName)], color: config.variable },
      { tag: t.invalid, color: config.invalid },
      { tag: t.strikethrough, textDecoration: 'line-through' },
      ...styles,
    ],
  });
};

export const red = redInit();
