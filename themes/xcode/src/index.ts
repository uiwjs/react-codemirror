/**
 * @name Xcode
 */
import { tags as t } from '@lezer/highlight';
import { createTheme, CreateThemeOptions } from '@uiw/codemirror-themes';

export const defaultSettingsXcodeLight: CreateThemeOptions['settings'] = {
  background: '#fff',
  foreground: '#3D3D3D',
  selection: '#BBDFFF',
  selectionMatch: '#BBDFFF',
  gutterBackground: '#fff',
  gutterForeground: '#AFAFAF',
  lineHighlight: '#EDF4FF',
};

export function xcodeLightInit(options?: Partial<CreateThemeOptions>) {
  const { theme = 'light', settings = {}, styles = [] } = options || {};
  return createTheme({
    theme: theme,
    settings: {
      ...defaultSettingsXcodeLight,
      ...settings,
    },
    styles: [
      { tag: [t.comment, t.quote], color: '#707F8D' },
      { tag: [t.typeName, t.typeOperator], color: '#aa0d91' },
      { tag: [t.keyword], color: '#aa0d91', fontWeight: 'bold' },
      { tag: [t.string, t.meta], color: '#D23423' },
      { tag: [t.name], color: '#032f62' },
      { tag: [t.typeName], color: '#522BB2' },
      { tag: [t.variableName], color: '#23575C' },
      { tag: [t.definition(t.variableName)], color: '#327A9E' },
      { tag: [t.regexp, t.link], color: '#0e0eff' },
      ...styles,
    ],
  });
}

export const xcodeLight = xcodeLightInit();

export const defaultSettingsXcodeDark: CreateThemeOptions['settings'] = {
  background: '#292A30',
  foreground: '#CECFD0',
  caret: '#fff',
  selection: '#727377',
  selectionMatch: '#727377',
  lineHighlight: '#2F3239',
};

export const xcodeDarkInit = (options?: Partial<CreateThemeOptions>) => {
  const { theme = 'dark', settings = {}, styles = [] } = options || {};
  return createTheme({
    theme: theme,
    settings: {
      ...defaultSettingsXcodeDark,
      ...settings,
    },
    styles: [
      { tag: [t.comment, t.quote], color: '#7F8C98' },
      { tag: [t.keyword], color: '#FF7AB2', fontWeight: 'bold' },
      { tag: [t.string, t.meta], color: '#FF8170' },
      { tag: [t.typeName], color: '#DABAFF' },
      { tag: [t.definition(t.variableName)], color: '#6BDFFF' },
      { tag: [t.name], color: '#6BAA9F' },
      { tag: [t.variableName], color: '#ACF2E4' },
      { tag: [t.regexp, t.link], color: '#FF8170' },
      ...styles,
    ],
  });
};

export const xcodeDark = xcodeDarkInit();
