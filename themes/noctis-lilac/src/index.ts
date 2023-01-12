import { tags as t } from '@lezer/highlight';
import { createTheme, CreateThemeOptions } from '@uiw/codemirror-themes';

export const noctisLilacInit = (options?: Partial<CreateThemeOptions>) => {
  const { theme = 'light', settings = {}, styles = [] } = options || {};
  return createTheme({
    theme: theme,
    settings: {
      background: '#f2f1f8',
      foreground: '#0c006b',
      caret: '#5c49e9',
      selection: '#d5d1f2',
      selectionMatch: '#d5d1f2',
      gutterBackground: '#f2f1f8',
      gutterForeground: '#0c006b70',
      lineHighlight: '#e1def3',
      ...settings,
    },
    styles: [
      {
        tag: t.comment,
        color: '#9995b7',
      },
      {
        tag: t.keyword,
        color: '#ff5792',
        fontWeight: 'bold',
      },
      {
        tag: [t.definitionKeyword, t.modifier],
        color: '#ff5792',
      },
      {
        tag: [t.className, t.tagName, t.definition(t.typeName)],
        color: '#0094f0',
      },
      {
        tag: [t.number, t.bool, t.null, t.special(t.brace)],
        color: '#5842ff',
      },
      {
        tag: [t.definition(t.propertyName), t.function(t.variableName)],
        color: '#0095a8',
      },
      {
        tag: t.typeName,
        color: '#b3694d',
      },
      {
        tag: [t.propertyName, t.variableName],
        color: '#fa8900',
      },
      {
        tag: t.operator,
        color: '#ff5792',
      },
      {
        tag: t.self,
        color: '#e64100',
      },
      {
        tag: [t.string, t.regexp],
        color: '#00b368',
      },
      {
        tag: [t.paren, t.bracket],
        color: '#0431fa',
      },
      {
        tag: t.labelName,
        color: '#00bdd6',
      },
      {
        tag: t.attributeName,
        color: '#e64100',
      },
      {
        tag: t.angleBracket,
        color: '#9995b7',
      },
      ...styles,
    ],
  });
};

export const noctisLilac = noctisLilacInit();
