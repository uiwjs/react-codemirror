import { tags as t } from '@lezer/highlight';
import { createTheme, CreateThemeOptions } from '@uiw/codemirror-themes';

export const eclipseInit = (options?: Partial<CreateThemeOptions>) => {
  const { theme = 'light', settings = {}, styles = [] } = options || {};
  return createTheme({
    theme: theme,
    settings: {
      background: '#fff',
      foreground: '#000',
      caret: '#FFFFFF',
      selection: '#d7d4f0',
      selectionMatch: '#d7d4f0',
      gutterBackground: '#f7f7f7',
      gutterForeground: '#999',
      lineHighlight: '#e8f2ff',
      gutterBorder: 'transparent',
      ...settings,
    },
    styles: [
      { tag: [t.comment], color: '#3F7F5F' },
      { tag: [t.documentMeta], color: '#FF1717' },
      { tag: t.keyword, color: '#7F0055', fontWeight: 'bold' },
      { tag: t.atom, color: '#00f' },
      { tag: t.number, color: '#164' },
      { tag: t.propertyName, color: '#164' },
      { tag: [t.variableName, t.definition(t.variableName)], color: '#0000C0' },
      { tag: t.function(t.variableName), color: '#0000C0' },
      { tag: t.string, color: '#2A00FF' },
      { tag: t.operator, color: 'black' },
      { tag: t.tagName, color: '#170' },
      { tag: t.attributeName, color: '#00c' },
      { tag: t.link, color: '#219' },
      ...styles,
    ],
  });
};

export const eclipse = eclipseInit();
