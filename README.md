# react-codemirror

[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-codemirror.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-codemirror)
[![Build & Deploy](https://github.com/uiwjs/react-codemirror/workflows/Build%20&%20Deploy/badge.svg)](https://github.com/uiwjs/react-codemirror/actions)
[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-codemirror/file/README.md)
[![npm version](https://img.shields.io/npm/v/@uiw/react-codemirror.svg)](https://www.npmjs.com/package/@uiw/react-codemirror)
[![Coverage Status](https://coveralls.io/repos/github/uiwjs/react-codemirror/badge.svg?branch=master)](https://coveralls.io/github/uiwjs/react-codemirror?branch=master)

CodeMirror component for React. Demo Preview: [@uiwjs.github.io/react-codemirror](https://uiwjs.github.io/react-codemirror/)

> ⚠️ The v3 version document preview is [here](https://raw.githack.com/uiwjs/react-codemirror/doc3/index.html).

<!--dividing-->

**Features:**

🚀 Quickly and easily configure the API.  
🌱 Versions after `@uiw/react-codemirror@v4` use [codemirror 6](https://codemirror.net/6/). [#88](https://github.com/uiwjs/react-codemirror/issues/88#issuecomment-914185563).  
⚛️ Support the features of React Hook(requires React 16.8+).  
📚 Use Typescript to write, better code hints.  
🌎 There are better [sample previews](https://uiwjs.github.io/react-codemirror).

## Install

```bash
# Not dependent on uiw.
npm install @uiw/react-codemirror --save
```

## Usage

[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?logo=codesandbox)](https://codesandbox.io/embed/react-codemirror-example-codemirror-6-slvju?fontsize=14&hidenavigation=1&theme=dark)

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

export default function App() {
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

## Props

- `value?: string` value of the auto created model in the editor.
- `width?: string` width of editor. Defaults to `auto`.
- `height?: string` height of editor. Defaults to `auto`.
- `theme?`: `light` / `dark` Defaults to `light`.

```ts
import React from 'react';
import { EditorState, EditorStateConfig, Extension } from '@codemirror/state';
import { EditorView } from '@codemirror/view';
export * from './useCodeMirror';
export * from '@codemirror/view';
export * from '@codemirror/basic-setup';
export * from '@codemirror/state';
export interface ReactCodeMirrorProps
  extends Omit<EditorStateConfig, 'doc' | 'extensions'>,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * value of the auto created model in the editor.
   */
  value?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  /** focus on the editor. */
  autoFocus?: boolean;
  theme?: 'light' | 'dark';
  /**
   * Fired whenever a change occurs to the document.
   */
  onChange?(value: string, viewUpdate: ViewUpdate): void;
  /** Fired whenever a change occurs to the document. There is a certain difference with `onChange`. */
  onUpdate?(viewUpdate: ViewUpdate): void;
  /**
   * Extension values can be [provided](https://codemirror.net/6/docs/ref/#state.EditorStateConfig.extensions) when creating a state to attach various kinds of configuration and behavior information.
   * They can either be built-in extension-providing objects,
   * such as [state fields](https://codemirror.net/6/docs/ref/#state.StateField) or [facet providers](https://codemirror.net/6/docs/ref/#state.Facet.of),
   * or objects with an extension in its `extension` property. Extensions can be nested in arrays arbitrarily deep—they will be flattened when processed.
   */
  extensions?: Extension[];
}
export interface ReactCodeMirrorRef {
  editor?: HTMLDivElement | null;
  state?: EditorState;
  view?: EditorView;
}
```

### Related

- [@uiw/react-md-editor](https://github.com/uiwjs/react-md-editor): A simple markdown editor with preview, implemented with React.js and TypeScript.
- [@uiw/react-monacoeditor](https://github.com/jaywcjlove/react-monacoeditor): Monaco Editor component for React.
- [@uiw/react-markdown-editor](https://github.com/uiwjs/react-markdown-editor): A markdown editor with preview, implemented with React.js and TypeScript.
- [@uiw/react-markdown-preview](https://github.com/jaywcjlove/react-monacoeditor): React component preview markdown text in web browser.

## License

Licensed under the MIT License.
