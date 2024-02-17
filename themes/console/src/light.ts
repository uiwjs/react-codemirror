import { createTheme, CreateThemeOptions } from '@uiw/codemirror-themes';

export const defaultSettingsConsoleLight: CreateThemeOptions['settings'] = {
  background: '#fff',
  foreground: '#000',
  caret: '#000',
  selection: '#d6ddf2',
  selectionMatch: '#6d85cf',
  gutterBackground: '#fff',
  gutterForeground: '#ada9a9',
  gutterActiveForeground: '#000',
  lineHighlight: '#c7c5c5',
};

export const consoleLightInit = (options?: Partial<CreateThemeOptions>) => {
  const { theme = 'light', settings = {}, styles = [] } = options || {};
  return createTheme({
    theme: theme,
    settings: {
      ...defaultSettingsConsoleLight,
      ...settings,
    },
    styles: [...styles],
  });
};

export const consoleLight = consoleLightInit();
