/**
 * @name darcula
 * @author darcula
 * Name: IntelliJ IDEA darcula theme
 * From IntelliJ IDEA by JetBrains
 */
import { tags as t } from '@lezer/highlight';
import { createTheme, CreateThemeOptions } from '@uiw/codemirror-themes';

export const darculaInit = (options?: Partial<CreateThemeOptions>) => {
  const { theme = 'light', settings = {}, styles = [] } = options || {};
  return createTheme({
    theme: theme,
    settings: {
      background: '#2B2B2B',
      foreground: '#f8f8f2',
      caret: '#FFFFFF',
      selection: 'rgba(255, 255, 255, 0.1)',
      selectionMatch: 'rgba(255, 255, 255, 0.2)',
      gutterBackground: 'rgba(255, 255, 255, 0.1)',
      gutterForeground: '#999',
      gutterBorder: 'transparent',
      lineHighlight: 'rgba(255, 255, 255, 0.1)',
      ...settings,
    },
    styles: [
      { tag: [t.atom, t.number], color: '#bd93f9' },
      { tag: [t.comment], color: '#61A151' },
      { tag: [t.string], color: '#6A8759' },
      { tag: [t.variableName, t.operator], color: '#A9B7C6' },
      { tag: [t.meta, t.className], color: '#A9B7C6' },
      { tag: [t.propertyName], color: '#FFC66D' },
      { tag: [t.keyword], color: '#CC7832' },
      { tag: [t.tagName], color: '#ff79c6' },
      { tag: [t.typeName], color: '#ffb86c' },
      ...styles,
    ],
  });
};

export const darcula = darculaInit();
