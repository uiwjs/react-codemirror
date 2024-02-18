import { createTheme, CreateThemeOptions } from '@uiw/codemirror-themes';

export const defaultSettingsConsoleDark: CreateThemeOptions['settings'] = {
  background: '#000',
  foreground: '#fff',
  caret: '#fff',
  selection: '#3e4865',
  selectionMatch: '#2a3967',
  gutterBackground: '#000',
  gutterForeground: '#ada9a9',
  gutterActiveForeground: '#000',
  lineHighlight: '#828282',
};

export const consoleDarkInit = (options?: Partial<CreateThemeOptions>) => {
  const { theme = 'dark', settings = {}, styles = [] } = options || {};
  return createTheme({
    theme: theme,
    settings: {
      ...defaultSettingsConsoleDark,
      ...settings,
    },
    styles: [...styles],
  });
};

export const consoleDark = consoleDarkInit();
