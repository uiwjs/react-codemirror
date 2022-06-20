# react-codemirror

[![jsdelivr CDN](https://data.jsdelivr.com/v1/package/npm/@uiw/react-codemirror/badge)](https://www.jsdelivr.com/package/npm/@uiw/react-codemirror)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-codemirror.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-codemirror)
[![Build & Deploy](https://github.com/uiwjs/react-codemirror/workflows/Build%20&%20Deploy/badge.svg)](https://github.com/uiwjs/react-codemirror/actions)
[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-codemirror/file/README.md)
[![npm version](https://img.shields.io/npm/v/@uiw/react-codemirror.svg)](https://www.npmjs.com/package/@uiw/react-codemirror)
[![Coverage Status](https://uiwjs.github.io/react-codemirror/coverage/badges.svg)](https://uiwjs.github.io/react-codemirror/coverage/lcov-report/)
[![Open in Gitpod](https://shields.io/badge/Open%20in-Gitpod-green?logo=Gitpod)](https://gitpod.io/#https://github.com/uiwjs/react-codemirror)

CodeMirror component for React. Demo Preview: [@uiwjs.github.io/react-codemirror](https://uiwjs.github.io/react-codemirror/)

<!--dividing-->

> ⚠️ The [`v3`](https://raw.githack.com/uiwjs/react-codemirror/doc3/index.html) version document preview is [here](https://raw.githack.com/uiwjs/react-codemirror/doc3/index.html).

<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

**Features:**

🚀 Quickly and easily configure the API.  
🌱 Versions after `@uiw/react-codemirror@v4`<!--rehype:style=background-color: #ffe564; padding: 1px 4px;--> use [codemirror 6](https://codemirror.net/6/). [#88](https://github.com/uiwjs/react-codemirror/issues/88#issuecomment-914185563).  
⚛️ Support the features of React Hook(requires React 16.8+).  
📚 Use Typescript to write, better code hints.  
🌐 The bundled version supports use directly in the browser [#267](https://github.com/uiwjs/react-codemirror/issues/267#issuecomment-1041227592).  
🌎 There are better [sample previews](https://uiwjs.github.io/react-codemirror).

## Install

**Not dependent on uiw.**

```bash
npm install @uiw/react-codemirror --save
```

## Usage

[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?logo=codesandbox)](https://codesandbox.io/embed/react-codemirror-example-codemirror-6-slvju?fontsize=14&hidenavigation=1&theme=dark)

```jsx mdx:preview
import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

function App() {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      extensions={[javascript({ jsx: true })]}
      onChange={(value, viewUpdate) => {
        console.log('value:', value);
      }}
    />
  );
}
export default App;
```

## Support Language

[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?logo=codesandbox)](https://codesandbox.io/embed/react-codemirror-example-codemirror-6-language-rz4rh?fontsize=14&hidenavigation=1&theme=dark)

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { StreamLanguage } from '@codemirror/language';
import { go } from '@codemirror/legacy-modes/mode/go';

const goLang = `package main
import "fmt"

func main() {
  fmt.Println("Hello, 世界")
}`;

export default function App() {
  return (
    <CodeMirror
      value={goLang}
      height="200px"
      extensions={[StreamLanguage.define(go)]}
      onChange={(value, viewUpdate) => {
        console.log('value:', value);
      }}
    />
  );
}
```

- ~~`@codemirror/legacy-modes/mode/cpp`~~ => [`@codemirror/lang-cpp`](https://www.npmjs.com/package/@codemirror/lang-cpp)
- ~~`@codemirror/legacy-modes/mode/html`~~ => [`@codemirror/lang-html`](https://www.npmjs.com/package/@codemirror/lang-html)
- ~~`@codemirror/legacy-modes/mode/java`~~ => [`@codemirror/lang-java`](https://www.npmjs.com/package/@codemirror/lang-java)
- ~~`@codemirror/legacy-modes/mode/javascript`~~ => [`@codemirror/lang-javascript`](https://www.npmjs.com/package/@codemirror/lang-javascript)
- ~~`@codemirror/legacy-modes/mode/json`~~ => [`@codemirror/lang-json`](https://www.npmjs.com/package/@codemirror/lang-json)
- ~~`@codemirror/legacy-modes/mode/lezer`~~ => [`@codemirror/lang-lezer`](https://www.npmjs.com/package/@codemirror/lang-lezer)
- ~~`@codemirror/legacy-modes/mode/markdown`~~ => [`@codemirror/lang-markdown`](https://www.npmjs.com/package/@codemirror/lang-markdown)
- ~~`@codemirror/legacy-modes/mode/php`~~ => [`@codemirror/lang-php`](https://www.npmjs.com/package/@codemirror/lang-php)
- ~~`@codemirror/legacy-modes/mode/python`~~ => [`@codemirror/lang-python`](https://www.npmjs.com/package/@codemirror/lang-python)
- ~~`@codemirror/legacy-modes/mode/rust`~~ => [`@codemirror/lang-rust`](https://www.npmjs.com/package/@codemirror/lang-rust)
- ~~`@codemirror/legacy-modes/mode/sql`~~ => [`@codemirror/lang-sql`](https://www.npmjs.com/package/@codemirror/lang-sql)
- ~~`@codemirror/legacy-modes/mode/xml`~~ => [`@codemirror/lang-xml`](https://www.npmjs.com/package/@codemirror/lang-xml)

### Markdown Example

Markdown language code is automatically highlighted.

[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?logo=codesandbox)](https://codesandbox.io/embed/react-codemirror-example-codemirror-6-markdown-auto-languages-iudnj?fontsize=14&hidenavigation=1&theme=dark)

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';

const code = `## Title

\`\`\`jsx
function Demo() {
  return <div>demo</div>
}
\`\`\`

\`\`\`bash
# Not dependent on uiw.
npm install @codemirror/lang-markdown --save
npm install @codemirror/language-data --save
\`\`\`

[weisit ulr](https://uiwjs.github.io/react-codemirror/)

\`\`\`go
package main
import "fmt"
func main() {
  fmt.Println("Hello, 世界")
}
\`\`\`
`;

export default function App() {
  return <CodeMirror value={code} extensions={[markdown({ base: markdownLanguage, codeLanguages: languages })]} />;
}
```

## Support Hook

[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?logo=codesandbox)](https://codesandbox.io/embed/react-codemirror-example-codemirror-6-hook-yr4vg?fontsize=14&hidenavigation=1&theme=dark)

```jsx
import { useEffect, useRef } from 'react';
import { useCodeMirror } from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

const code = "console.log('hello world!');\n\n\n";

export default function App() {
  const editor = useRef();
  const { setContainer } = useCodeMirror({
    container: editor.current,
    extensions: [javascript()],
    value: code,
  });

  useEffect(() => {
    if (editor.current) {
      setContainer(editor.current);
    }
  }, [editor.current]);

  return <div ref={editor} />;
}
```

## Using custom theme

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { createTheme } from '@uiw/codemirror-themes';
import { javascript } from '@codemirror/lang-javascript';
import { tags as t } from '@lezer/highlight';

const myTheme = createTheme({
  variant: 'light',
  settings: {
    background: '#ffffff',
    foreground: '#75baff',
    caret: '#5d00ff',
    selection: '#036dd626',
    lineHighlight: '#8a91991a',
    gutterBackground: '#fff',
    gutterForeground: '#8a919966',
  },
  styles: [
    { tag: t.comment, color: '#787b8099' },
    { tag: t.variableName, color: '#0080ff' },
    { tag: [t.string, t.special(t.brace)], color: '#5c6166' },
    { tag: t.number, color: '#5c6166' },
    { tag: t.bool, color: '#5c6166' },
    { tag: t.null, color: '#5c6166' },
    { tag: t.keyword, color: '#5c6166' },
    { tag: t.operator, color: '#5c6166' },
    { tag: t.className, color: '#5c6166' },
    { tag: t.definition(t.typeName), color: '#5c6166' },
    { tag: t.typeName, color: '#5c6166' },
    { tag: t.angleBracket, color: '#5c6166' },
    { tag: t.tagName, color: '#5c6166' },
    { tag: t.attributeName, color: '#5c6166' },
  ],
});

export default function App() {
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
```

## Props

<!--rehype:style=background-color: #ffe564; display: inline-block; border-bottom: 0; padding: 3px 12px;-->

- `value?: string` value of the auto created model in the editor.
- `width?: string` width of editor. Defaults to `auto`.
- `height?: string` height of editor. Defaults to `auto`.
- `theme?`: `'light'` / `'dark'` / `Extension` Defaults to `'light'`.

```ts
import React from 'react';
import { EditorState, EditorStateConfig, Extension } from '@codemirror/state';
import { EditorView, ViewUpdate } from '@codemirror/view';
export * from '@codemirror/view';
export * from '@codemirror/basic-setup';
export * from '@codemirror/state';
export interface UseCodeMirror extends ReactCodeMirrorProps {
  container?: HTMLDivElement | null;
}
export declare function useCodeMirror(props: UseCodeMirror): {
  state: EditorState | undefined;
  setState: import('react').Dispatch<import('react').SetStateAction<EditorState | undefined>>;
  view: EditorView | undefined;
  setView: import('react').Dispatch<import('react').SetStateAction<EditorView | undefined>>;
  container: HTMLDivElement | null | undefined;
  setContainer: import('react').Dispatch<import('react').SetStateAction<HTMLDivElement | null | undefined>>;
};
export interface ReactCodeMirrorProps
  extends Omit<EditorStateConfig, 'doc' | 'extensions'>,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'placeholder'> {
  /** value of the auto created model in the editor. */
  value?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  /** focus on the editor. */
  autoFocus?: boolean;
  /** Enables a placeholder—a piece of example content to show when the editor is empty. */
  placeholder?: string | HTMLElement;
  /**
   * `light` / `dark` / `Extension` Defaults to `light`.
   * @default light
   */
  theme?: 'light' | 'dark' | Extension;
  /**
   * Whether to optional basicSetup by default
   * @default true
   */
  basicSetup?: boolean | BasicSetupOptions;
  /**
   * This disables editing of the editor content by the user.
   * @default true
   */
  editable?: boolean;
  /**
   * This disables editing of the editor content by the user.
   * @default false
   */
  readOnly?: boolean;
  /**
   * Whether to optional basicSetup by default
   * @default true
   */
  indentWithTab?: boolean;
  /** Fired whenever a change occurs to the document. */
  onChange?(value: string, viewUpdate: ViewUpdate): void;
  /** Fired whenever any state change occurs within the editor, including non-document changes like lint results. */
  onUpdate?(viewUpdate: ViewUpdate): void;
  /**
   * Extension values can be [provided](https://codemirror.net/6/docs/ref/#state.EditorStateConfig.extensions) when creating a state to attach various kinds of configuration and behavior information.
   * They can either be built-in extension-providing objects,
   * such as [state fields](https://codemirror.net/6/docs/ref/#state.StateField) or [facet providers](https://codemirror.net/6/docs/ref/#state.Facet.of),
   * or objects with an extension in its `extension` property. Extensions can be nested in arrays arbitrarily deep—they will be flattened when processed.
   */
  extensions?: Extension[];
  /**
   * If the view is going to be mounted in a shadow root or document other than the one held by the global variable document (the default), you should pass it here.
   * Originally from the [config of EditorView](https://codemirror.net/6/docs/ref/#view.EditorView.constructor%5Econfig.root)
   */
  root?: ShadowRoot | Document;
}
export interface ReactCodeMirrorRef {
  editor?: HTMLDivElement | null;
  state?: EditorState;
  view?: EditorView;
}
declare const ReactCodeMirror: React.ForwardRefExoticComponent<
  ReactCodeMirrorProps & React.RefAttributes<ReactCodeMirrorRef>
>;
export default ReactCodeMirror;
export interface BasicSetupOptions {
  lineNumbers?: boolean;
  highlightActiveLineGutter?: boolean;
  highlightSpecialChars?: boolean;
  history?: boolean;
  foldGutter?: boolean;
  drawSelection?: boolean;
  dropCursor?: boolean;
  allowMultipleSelections?: boolean;
  indentOnInput?: boolean;
  syntaxHighlighting?: boolean;
  bracketMatching?: boolean;
  closeBrackets?: boolean;
  autocompletion?: boolean;
  rectangularSelection?: boolean;
  crosshairCursor?: boolean;
  highlightActiveLine?: boolean;
  highlightSelectionMatches?: boolean;
  closeBracketsKeymap?: boolean;
  defaultKeymap?: boolean;
  searchKeymap?: boolean;
  historyKeymap?: boolean;
  foldKeymap?: boolean;
  completionKeymap?: boolean;
  lintKeymap?: boolean;
}
```

## Packages

| Name                            | NPM Version                                                                                                                                   | Website                                                                              |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `@uiw/react-codemirror`         | [![npm version](https://img.shields.io/npm/v/@uiw/react-codemirror.svg)](https://www.npmjs.com/package/@uiw/react-codemirror)                 | [Preview Website](https://uiwjs.github.io/react-codemirror/)                         |
| `@uiw/codemirror-themes`        | [![npm version](https://img.shields.io/npm/v/@uiw/codemirror-themes.svg)](https://www.npmjs.com/package/@uiw/codemirror-themes)               | [Preview Website](https://uiwjs.github.io/react-codemirror/#/theme/doc)              |
| `@uiw/codemirror-theme-okaidia` | [![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-okaidia.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-okaidia) | [Preview Website](https://uiwjs.github.io/react-codemirror/#/theme/data/okaidia)     |
| `@uiw/codemirror-theme-duotone` | [![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-duotone.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-duotone) | [Preview Website](https://uiwjs.github.io/react-codemirror/#/theme/data/duotoneDark) |
| `@uiw/codemirror-theme-dracula` | [![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-dracula.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-dracula) | [Preview Website](https://uiwjs.github.io/react-codemirror/#/theme/data/dracula)     |

<!--rehype:style=width: 100%; display: inline-table;-->

### Related

- [@uiw/react-textarea-code-editor](https://github.com/uiwjs/react-textarea-code-editor): A simple code editor with syntax highlighting.
- [@uiw/react-md-editor](https://github.com/uiwjs/react-md-editor): A simple markdown editor with preview, implemented with React.js and TypeScript.
- [@uiw/react-monacoeditor](https://github.com/jaywcjlove/react-monacoeditor): Monaco Editor component for React.
- [@uiw/react-markdown-editor](https://github.com/uiwjs/react-markdown-editor): A markdown editor with preview, implemented with React.js and TypeScript.
- [@uiw/react-markdown-preview](https://github.com/uiwjs/react-markdown-preview): React component preview markdown text in web browser.
- [Online JSON Viewer](https://github.com/uiwjs/json-viewer) Online JSON Viewer, JSON Beautifier to beautify and tree view of JSON data - It works as JSON Pretty Print to pretty print JSON data.

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/uiwjs/react-codemirror/graphs/contributors">
  <img src="https://uiwjs.github.io/react-codemirror/CONTRIBUTORS.svg" />
</a>

Made with [github-action-contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.
