declare module '@uiw/codemirror-theme-basic/light' {
  import { CreateThemeOptions } from '@uiw/codemirror-themes';
  export const defaultSettingsBasicLight: CreateThemeOptions['settings'];
  export const basicLightInit: (options?: Partial<CreateThemeOptions>) => import('@codemirror/state').Extension;
  export const basicLight: import('@codemirror/state').Extension;
}
