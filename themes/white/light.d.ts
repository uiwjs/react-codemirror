declare module '@uiw/codemirror-theme-white/light' {
  import { CreateThemeOptions } from '@uiw/codemirror-themes';
  export const defaultSettingsWhiteLight: CreateThemeOptions['settings'];
  export const whiteLightInit: (options?: Partial<CreateThemeOptions>) => import('@codemirror/state').Extension;
  export const whiteLight: import('@codemirror/state').Extension;
}
