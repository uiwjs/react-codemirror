<!--rehype:ignore:start-->

# Atom One Theme

<!--rehype:ignore:end-->

[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-atomone.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-atomone)

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/atomone">
  <img width="436" alt="codemirror-theme-atomone" src="https://user-images.githubusercontent.com/1680273/181795374-7a25cb90-5d77-4f86-9cbc-b1e12dc939d3.png">
</a>

## Install

```bash
npm install @uiw/codemirror-theme-atomone --save
```

```jsx
import { tags as t } from '@lezer/highlight';
import { atomone, atomoneInit } from '@uiw/codemirror-theme-atomone';

<CodeMirror theme={atomone} />
<CodeMirror
  theme={atomoneInit({
    settings: {
      caret: '#c6c6c6',
      fontFamily: 'monospace',
    },
    styles: [
      { tag: t.comment, color: '#6272a4' },
    ]
  })}
/>
```

## API

```tsx
import { CreateThemeOptions } from '@uiw/codemirror-themes';
export declare const atomoneInit: (options?: CreateThemeOptions) => import('@codemirror/state').Extension;
export declare const atomone: import('@codemirror/state').Extension;
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { atomone } from '@uiw/codemirror-theme-atomone';
import { javascript } from '@codemirror/lang-javascript';

function App() {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      theme={atomone}
      extensions={[javascript({ jsx: true })]}
      onChange={(value, viewUpdate) => {
        console.log('value:', value);
      }}
    />
  );
}
export default App;
```

```js
import { EditorView } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { javascript } from '@codemirror/lang-javascript';
import { atomone } from '@uiw/codemirror-theme-atomone';

const state = EditorState.create({
  doc: 'my source code',
  extensions: [atomone, javascript({ jsx: true })],
});

const view = new EditorView({
  parent: document.querySelector('#editor'),
  state,
});
```

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/uiwjs/react-codemirror/graphs/contributors">
  <img src="https://uiwjs.github.io/react-codemirror/CONTRIBUTORS.svg" />
</a>

Made with [github-action-contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.
