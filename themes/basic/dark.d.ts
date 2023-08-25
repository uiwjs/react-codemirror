declare module '@uiw/codemirror-theme-basic/dark' {
  import { CreateThemeOptions } from '@uiw/codemirror-themes';
  export const defaultSettingsBasicDark: CreateThemeOptions['settings'];
  export const basicDarkInit: (options?: Partial<CreateThemeOptions>) => import('@codemirror/state').Extension;
  export const basicDark: import('@codemirror/state').Extension;
}
