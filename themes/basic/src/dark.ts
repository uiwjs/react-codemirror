import { tags as t } from '@lezer/highlight';
import { createTheme, CreateThemeOptions } from '@uiw/codemirror-themes';

export const defaultSettingsBasicDark: CreateThemeOptions['settings'] = {
  background: '#2E3235',
  foreground: '#DDDDDD',
  caret: '#DDDDDD',
  selection: '#202325',
  selectionMatch: '#202325',
  gutterBackground: '#292d30',
  gutterForeground: '#808080',
  gutterBorder: '1px solid #ffffff10',
  lineHighlight: '#B9D2FF30',
};

export const basicDarkInit = (options?: Partial<CreateThemeOptions>) => {
  const { theme = 'dark', settings = {}, styles = [] } = options || {};
  return createTheme({
    theme: theme,
    settings: {
      ...defaultSettingsBasicDark,
      ...settings,
    },
    styles: [
      { tag: t.keyword, color: '#fda331' },
      {
        tag: [t.name, t.deleted, t.character, t.propertyName, t.macroName],
        color: '#b5bd68',
      },
      { tag: [t.variableName], color: '#6fb3d2' },
      { tag: [t.function(t.variableName)], color: '#fda331' },
      { tag: [t.labelName], color: '#fc6d24' },
      {
        tag: [t.color, t.constant(t.name), t.standard(t.name)],
        color: '#fda331',
      },
      { tag: [t.definition(t.name), t.separator], color: '#cc99cc' },
      { tag: [t.brace], color: '#cc99cc' },
      {
        tag: [t.annotation],
        color: '#fc6d24',
      },
      {
        tag: [t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace],
        color: '#fda331',
      },
      {
        tag: [t.typeName, t.className],
        color: '#6fb3d2',
      },
      {
        tag: [t.operator, t.operatorKeyword],
        color: '#cc99cc',
      },
      {
        tag: [t.tagName],
        color: '#fda331',
      },
      {
        tag: [t.squareBracket],
        color: '#cc99cc',
      },
      {
        tag: [t.angleBracket],
        color: '#cc99cc',
      },
      {
        tag: [t.attributeName],
        color: '#6fb3d2',
      },
      {
        tag: [t.regexp],
        color: '#fda331',
      },
      {
        tag: [t.quote],
        color: '#DDDDDD',
      },
      { tag: [t.string], color: '#b5bd68' },
      {
        tag: t.link,
        color: '#6987AF',
        textDecoration: 'underline',
        textUnderlinePosition: 'under',
      },
      {
        tag: [t.url, t.escape, t.special(t.string)],
        color: '#8abeb7',
      },
      { tag: [t.meta], color: '#A54543' },
      { tag: [t.comment], color: '#808080', fontStyle: 'italic' },
      { tag: t.monospace, color: '#DDDDDD' },
      { tag: t.strong, fontWeight: 'bold', color: '#fda331' },
      { tag: t.emphasis, fontStyle: 'italic', color: '#6fb3d2' },
      { tag: t.strikethrough, textDecoration: 'line-through' },
      { tag: t.heading, fontWeight: 'bold', color: '#DDDDDD' },
      { tag: t.special(t.heading1), fontWeight: 'bold', color: '#DDDDDD' },
      { tag: t.heading1, fontWeight: 'bold', color: '#DDDDDD' },
      {
        tag: [t.heading2, t.heading3, t.heading4],
        fontWeight: 'bold',
        color: '#DDDDDD',
      },
      {
        tag: [t.heading5, t.heading6],
        color: '#DDDDDD',
      },
      { tag: [t.atom, t.bool, t.special(t.variableName)], color: '#8abeb7' },
      {
        tag: [t.processingInstruction, t.inserted],
        color: '#8abeb7',
      },
      {
        tag: [t.contentSeparator],
        color: '#6fb3d2',
      },
      { tag: t.invalid, color: '#B9D2FF', borderBottom: `1px dotted ${'#fc6d24'}` },
      ...styles,
    ],
  });
};

export const basicDark = basicDarkInit();
