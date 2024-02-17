declare module '@uiw/codemirror-theme-console/dark' {
  import { CreateThemeOptions } from '@uiw/codemirror-themes';
  export const defaultSettingsConsoleDark: CreateThemeOptions['settings'];
  export const consoleDarkInit: (options?: Partial<CreateThemeOptions>) => import('@codemirror/state').Extension;
  export const consoleDark: import('@codemirror/state').Extension;
}
