import { tags as t } from '@lezer/highlight';
import { createTheme, CreateThemeOptions } from '@uiw/codemirror-themes';

export const defaultSettingsMaterial: CreateThemeOptions['settings'] = {
  background: '#2e3235',
  foreground: '#bdbdbd',
  caret: '#a0a4ae',
  selection: '#d7d4f063',
  selectionMatch: '#d7d4f063',
  gutterBackground: '#2e3235',
  gutterForeground: '#999',
  gutterActiveForeground: '#4f5b66',
  lineHighlight: '#545b6130',
};

export const defaultSettingsMaterialDark = defaultSettingsMaterial;

export const materialInit = (options?: Partial<CreateThemeOptions>) => {
  const { theme = 'dark', settings = {}, styles = [] } = options || {};
  return createTheme({
    theme: theme,
    settings: {
      ...defaultSettingsMaterial,
      ...settings,
    },
    styles: [
      { tag: t.keyword, color: '#cf6edf' },
      {
        tag: [t.name, t.deleted, t.character, t.macroName],
        color: '#56c8d8',
      },
      { tag: [t.propertyName], color: '#facf4e' },
      { tag: [t.variableName], color: '#bdbdbd' },
      { tag: [t.function(t.variableName)], color: '#56c8d8' },
      { tag: [t.labelName], color: '#cf6edf' },
      {
        tag: [t.color, t.constant(t.name), t.standard(t.name)],
        color: '#facf4e',
      },
      { tag: [t.definition(t.name), t.separator], color: '#fa5788' },
      { tag: [t.brace], color: '#cf6edf' },
      {
        tag: [t.annotation],
        color: '#ff5f52',
      },
      {
        tag: [t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace],
        color: '#ffad42',
      },
      {
        tag: [t.typeName, t.className],
        color: '#ffad42',
      },
      {
        tag: [t.operator, t.operatorKeyword],
        color: '#7186f0',
      },
      {
        tag: [t.tagName],
        color: '#99d066',
      },
      {
        tag: [t.squareBracket],
        color: '#ff5f52',
      },
      {
        tag: [t.angleBracket],
        color: '#606f7a',
      },
      {
        tag: [t.attributeName],
        color: '#bdbdbd',
      },
      {
        tag: [t.regexp],
        color: '#ff5f52',
      },
      {
        tag: [t.quote],
        color: '#6abf69',
      },
      { tag: [t.string], color: '#99d066' },
      {
        tag: t.link,
        color: '#56c8d8',
        textDecoration: 'underline',
        textUnderlinePosition: 'under',
      },
      {
        tag: [t.url, t.escape, t.special(t.string)],
        color: '#facf4e',
      },
      { tag: [t.meta], color: '#707d8b' },
      { tag: [t.comment], color: '#707d8b', fontStyle: 'italic' },
      { tag: t.monospace, color: '#bdbdbd' },
      { tag: t.strong, fontWeight: 'bold', color: '#ff5f52' },
      { tag: t.emphasis, fontStyle: 'italic', color: '#99d066' },
      { tag: t.strikethrough, textDecoration: 'line-through' },
      { tag: t.heading, fontWeight: 'bold', color: '#facf4e' },
      { tag: t.heading1, fontWeight: 'bold', color: '#facf4e' },
      {
        tag: [t.heading2, t.heading3, t.heading4],
        fontWeight: 'bold',
        color: '#facf4e',
      },
      {
        tag: [t.heading5, t.heading6],
        color: '#facf4e',
      },
      { tag: [t.atom, t.bool, t.special(t.variableName)], color: '#56c8d8' },
      {
        tag: [t.processingInstruction, t.inserted],
        color: '#ff5f52',
      },
      {
        tag: [t.contentSeparator],
        color: '#56c8d8',
      },
      { tag: t.invalid, color: '#606f7a', borderBottom: `1px dotted #ff5f52` },
      ...styles,
    ],
  });
};

export const materialDarkInit = materialInit;
export const materialDark = materialInit();
export const material = materialInit();

export const defaultSettingsMaterialLight: CreateThemeOptions['settings'] = {
  background: '#FAFAFA',
  foreground: '#90A4AE',
  caret: '#272727',
  selection: '#80CBC440',
  selectionMatch: '#80CBC440',
  gutterBackground: '#FAFAFA',
  gutterForeground: '#90A4AE',
  gutterBorder: 'transparent',
  lineHighlight: '#CCD7DA50',
};

export const materialLightInit = (options?: Partial<CreateThemeOptions>) => {
  const { theme = 'light', settings = {}, styles = [] } = options || {};
  return createTheme({
    theme: theme,
    settings: {
      ...defaultSettingsMaterialLight,
      ...settings,
    },
    styles: [
      { tag: t.keyword, color: '#39ADB5' },
      { tag: [t.name, t.deleted, t.character, t.macroName], color: '#90A4AE' },
      { tag: [t.propertyName], color: '#6182B8' },
      { tag: [t.processingInstruction, t.string, t.inserted, t.special(t.string)], color: '#91B859' },
      { tag: [t.function(t.variableName), t.labelName], color: '#6182B8' },
      { tag: [t.color, t.constant(t.name), t.standard(t.name)], color: '#39ADB5' },
      { tag: [t.definition(t.name), t.separator], color: '#90A4AE' },
      { tag: [t.className], color: '#E2931D' },
      { tag: [t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace], color: '#F76D47' },
      { tag: [t.typeName], color: '#E2931D', fontStyle: '#E2931D' },
      { tag: [t.operator, t.operatorKeyword], color: '#39ADB5' },
      { tag: [t.url, t.escape, t.regexp, t.link], color: '#91B859' },
      { tag: [t.meta, t.comment], color: '#90A4AE' },
      { tag: t.strong, fontWeight: 'bold' },
      { tag: t.emphasis, fontStyle: 'italic' },
      { tag: t.link, textDecoration: 'underline' },
      { tag: t.heading, fontWeight: 'bold', color: '#39ADB5' },
      { tag: [t.atom, t.bool, t.special(t.variableName)], color: '#90A4AE' },
      { tag: t.invalid, color: '#E5393570' },
      { tag: t.strikethrough, textDecoration: 'line-through' },
      ...styles,
    ],
  });
};

export const materialLight = materialLightInit();
