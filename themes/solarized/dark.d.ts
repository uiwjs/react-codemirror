declare module '@uiw/codemirror-theme-solarized/dark' {
  import { CreateThemeOptions } from '@uiw/codemirror-themes';
  export const defaultSettingsSolarizedDark: CreateThemeOptions['settings'];
  export const solarizedDarkInit: (options?: Partial<CreateThemeOptions>) => import('@codemirror/state').Extension;
  export const solarizedDark: import('@codemirror/state').Extension;
}
