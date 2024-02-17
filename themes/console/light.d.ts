declare module '@uiw/codemirror-theme-console/light' {
  import { CreateThemeOptions } from '@uiw/codemirror-themes';
  export const defaultSettingsConsoleLight: CreateThemeOptions['settings'];
  export const consoleLightInit: (options?: Partial<CreateThemeOptions>) => import('@codemirror/state').Extension;
  export const consoleLight: import('@codemirror/state').Extension;
}
