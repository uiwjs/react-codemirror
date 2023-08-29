import { tags as t } from '@lezer/highlight';
import { createTheme, type CreateThemeOptions } from '@uiw/codemirror-themes';
import { config as c } from './color';

export const defaultSettingsMonokaiDimmed: CreateThemeOptions['settings'] = {
  background: c.background,
  foreground: c.foreground,
  caret: c.cursor,
  selection: c.selection,
  selectionMatch: c.selection,
  gutterBackground: c.background,
  gutterForeground: c.foreground,
  lineHighlight: c.activeLine,
};

export const monokaiDimmedInit = (options?: Partial<CreateThemeOptions>) => {
  const { theme = 'dark', settings = {}, styles = [] } = options || {};
  return createTheme({
    theme: theme,
    settings: {
      ...defaultSettingsMonokaiDimmed,
      ...settings,
    },
    styles: [
      { tag: t.keyword, color: c.keyword },
      { tag: [t.name, t.deleted, t.character, t.macroName], color: c.variable },
      { tag: [t.propertyName], color: c.function },
      { tag: [t.processingInstruction, t.string, t.inserted, t.special(t.string)], color: c.string },
      { tag: [t.function(t.variableName), t.labelName], color: c.function },
      { tag: [t.color, t.constant(t.name), t.standard(t.name)], color: c.constant },
      { tag: [t.definition(t.name), t.separator], color: c.variable },
      { tag: [t.className], color: c.class },
      { tag: [t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace], color: c.number },
      { tag: [t.typeName], color: c.type, fontStyle: c.type },
      { tag: [t.operator, t.operatorKeyword], color: c.keyword },
      { tag: [t.url, t.escape, t.regexp, t.link], color: c.regexp },
      { tag: [t.meta, t.comment], color: c.comment },
      { tag: t.tagName, color: c.tag },
      { tag: t.strong, fontWeight: 'bold' },
      { tag: t.emphasis, fontStyle: 'italic' },
      { tag: t.link, textDecoration: 'underline' },
      { tag: t.heading, fontWeight: 'bold', color: c.heading },
      { tag: [t.atom, t.bool, t.special(t.variableName)], color: c.variable },
      { tag: t.invalid, color: c.invalid },
      { tag: t.strikethrough, textDecoration: 'line-through' },
      ...styles,
    ],
  });
};

export const monokaiDimmed = monokaiDimmedInit();
