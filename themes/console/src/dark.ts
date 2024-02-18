import { createTheme, CreateThemeOptions } from '@uiw/codemirror-themes';

export const defaultSettingsConsoleDark: CreateThemeOptions['settings'] = {
  background: '#000',
  foreground: '#fff',
  caret: '#fff',
  selection: '#5c6c9b',
  selectionMatch: '#2a3967',
  gutterBackground: '#000',
  gutterForeground: '#ada9a9',
  gutterActiveForeground: '#fff',
  lineHighlight: '#82828275',
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
