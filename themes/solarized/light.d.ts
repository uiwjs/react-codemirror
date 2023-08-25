declare module '@uiw/codemirror-theme-solarized/light' {
  import { CreateThemeOptions } from '@uiw/codemirror-themes';
  export const defaultSettingsSolarizedLight: CreateThemeOptions['settings'];
  export const solarizedLightInit: (options?: Partial<CreateThemeOptions>) => import('@codemirror/state').Extension;
  export const solarizedLight: import('@codemirror/state').Extension;
}
