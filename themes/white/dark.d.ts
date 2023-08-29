declare module '@uiw/codemirror-theme-white/dark' {
  import { CreateThemeOptions } from '@uiw/codemirror-themes';
  export const defaultSettingsWhiteDark: CreateThemeOptions['settings'];
  export const whiteDarkInit: (options?: Partial<CreateThemeOptions>) => import('@codemirror/state').Extension;
  export const whiteDark: import('@codemirror/state').Extension;
}
