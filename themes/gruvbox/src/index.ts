/**
 * @name gruvbox-dark
 * @author morhetz
 * Name: Gruvbox
 * From github.com/codemirror/codemirror5/blob/master/theme/gruvbox-dark.css
 */
import { tags as t } from '@lezer/highlight';
import { createTheme } from '@uiw/codemirror-themes';

export const gruvboxDark = createTheme({
  theme: 'dark',
  settings: {
    background: '#282828',
    foreground: '#ebdbb2',
    caret: '#ebdbb2',
    selection: '#bdae93',
    selectionMatch: '#bdae93',
    lineHighlight: '#3c3836',
    gutterBackground: '#282828',
    gutterForeground: '#7c6f64',
  },
  styles: [
    { tag: t.comment, color: '#928374' },
    { tag: t.variableName, color: '#ebdbb2' },
    { tag: [t.string, t.special(t.brace)], color: '#b8bb26' },
    { tag: t.number, color: '#d3869b' },
    { tag: t.bool, color: '#d3869b' },
    { tag: t.null, color: '#d3869b' },
    { tag: t.keyword, color: '#f84934' },
    { tag: t.operator, color: '#ebdbb2' },
    { tag: t.className, color: '#8ec07c' },
    { tag: t.definition(t.typeName), color: '#f84934' },
    { tag: t.typeName, color: '#f84934' },
    { tag: t.angleBracket, color: '#fe8019' },
    { tag: t.tagName, color: '#fe8019' },
    { tag: t.attributeName, color: '#8ec07c' },
  ],
});
