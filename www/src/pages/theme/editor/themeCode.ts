import { CreateThemeOptions } from '@uiw/codemirror-themes';

interface Styles {
  comment: string;
  variable: string;
  string: string;
  number: string;
  bool: string;
  null: string;
  keyword: string;
  operator: string;
  className: string;
  typeDefinition: string;
  typeName: string;
  HTMLbracket: string;
  HTMLtag: string;
  HTMLattribute: string;
}

export const thmeCode = (
  colors: Styles & CreateThemeOptions['settings'],
) => `import CodeMirror from '@uiw/react-codemirror';
import { createTheme } from '@uiw/codemirror-themes';
import { javascript } from '@codemirror/lang-javascript';
import { tags as t } from '@lezer/highlight';

const myTheme = createTheme({
  variant: 'light',
  settings: {
    background: '${colors.background}',
    foreground: '${colors.foreground}',
    caret: '${colors.caret}',
    selection: '${colors.selection}',
    lineHighlight: '${colors.lineHighlight}',
    gutterBackground: '${colors.gutterBackground}',
    gutterForeground: '${colors.gutterForeground}',
  },
  styles: [
    { tag: t.comment, color: '${colors.comment}' },
    { tag: t.variableName, color: '${colors.variable}' },
    {
      tag: [t.string, t.special(t.brace)],
      color: '${colors.string}',
    },
    { tag: t.number, color: '${colors.number}', },
    { tag: t.bool, color: '${colors.bool}', },
    { tag: t.null, color: '${colors.null}', },
    {
      tag: t.keyword,
      color: '${colors.keyword}',
    },
    {
      tag: t.operator,
      color: '${colors.operator}',
    },
    {
      tag: t.className,
      color: '${colors.className}',
    },
    {
      tag: t.definition(t.typeName),
      color: '${colors.typeDefinition}',
    },
    {
      tag: t.typeName,
      color: '${colors.typeName}',
    },
    {
      tag: t.angleBracket,
      color: '${colors.HTMLbracket}',
    },
    {
      tag: t.tagName,
      color: '${colors.HTMLtag}',
    },
    {
      tag: t.attributeName,
      color: '${colors.HTMLattribute}',
    },
  ],
});

function App() {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      theme={myTheme}
      extensions={[javascript({ jsx: true })]}
      onChange={(value, viewUpdate) => {
        console.log('value:', value);
      }}
    />
  );
}
export default App;`;
