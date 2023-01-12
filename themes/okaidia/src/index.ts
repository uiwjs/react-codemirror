import { tags as t } from '@lezer/highlight';
import { createTheme, CreateThemeOptions } from '@uiw/codemirror-themes';

export const okaidiaInit = (options?: Partial<CreateThemeOptions>) => {
  const { theme = 'dark', settings = {}, styles = [] } = options || {};
  return createTheme({
    theme: theme,
    settings: {
      background: '#272822',
      foreground: '#FFFFFF',
      caret: '#FFFFFF',
      selection: '#49483E',
      selectionMatch: '#49483E',
      gutterBackground: '#272822',
      gutterForeground: '#FFFFFF70',
      lineHighlight: '#00000059',
      ...settings,
    },
    styles: [
      { tag: [t.comment, t.documentMeta], color: '#8292a2' },
      { tag: [t.number, t.bool, t.null, t.atom], color: '#ae81ff' },
      { tag: [t.attributeValue, t.className, t.name], color: '#e6db74' },
      {
        tag: [t.propertyName, t.attributeName],
        color: '#a6e22e',
      },
      {
        tag: [t.variableName],
        color: '#9effff',
      },
      {
        tag: [t.squareBracket],
        color: '#bababa',
      },
      {
        tag: [t.string, t.special(t.brace)],
        color: '#e6db74',
      },
      {
        tag: [t.regexp, t.className, t.typeName, t.definition(t.typeName)],
        color: '#66d9ef',
      },
      {
        tag: [t.definition(t.variableName), t.definition(t.propertyName), t.function(t.variableName)],
        color: '#fd971f',
      },
      // { tag: t.keyword, color: '#f92672' },
      {
        tag: [t.keyword, t.definitionKeyword, t.modifier, t.tagName, t.angleBracket],
        color: '#f92672',
      },
      ...styles,
    ],
  });
};

export const okaidia = okaidiaInit();
