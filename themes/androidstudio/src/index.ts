/**
 * @name androidstudio
 */
import { tags as t } from '@lezer/highlight';
import { createTheme, CreateThemeOptions } from '@uiw/codemirror-themes';

export const androidstudioInit = (options?: Partial<CreateThemeOptions>) => {
  const { theme = 'dark', settings = {}, styles = [] } = options || {};
  return createTheme({
    theme: theme,
    settings: {
      background: '#282b2e',
      foreground: '#a9b7c6',
      caret: '#00FF00',
      selection: '#343739',
      selectionMatch: '#343739',
      lineHighlight: '#343739',
      ...settings,
    },
    styles: [
      { tag: [t.keyword, t.deleted, t.className], color: '#cc7832' },
      { tag: [t.number, t.literal, t.derefOperator], color: '#6897bb' },
      { tag: [t.link, t.variableName], color: '#629755' },
      { tag: [t.comment, t.quote], color: 'grey' },
      { tag: [t.meta, t.documentMeta], color: '#bbb529' },
      { tag: [t.string, t.propertyName, t.attributeValue], color: '#6a8759' },
      { tag: [t.heading, t.typeName], color: '#ffc66d' },
      { tag: [t.attributeName], color: '#a9b7c6' },
      { tag: [t.emphasis], fontStyle: 'italic' },
      ...styles,
    ],
  });
};

export const androidstudio = androidstudioInit();
