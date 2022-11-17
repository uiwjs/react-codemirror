<!--rehype:ignore:start-->

# VSCode Theme

<!--rehype:ignore:end-->

[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-vscode.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-vscode)

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/vscode/dark">
  <img width="436" alt="codemirror-theme-vscode dark" src="https://user-images.githubusercontent.com/1935696/202500700-11643593-5385-4d5b-9f41-1414dc4ddba5.png">
</a>

## Install

```bash
npm install @uiw/codemirror-theme-vscode --save
```

```jsx
import { vscodeDark, vscodeDarkInit } from '@uiw/codemirror-theme-vscode';

<CodeMirror theme={vscodeDark} />

<CodeMirror
  theme={vscodeDarkInit({
    fontFamily: 'monospace',
  })}
/>
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';

function App() {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      theme={vscodeDark}
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
import { vscodeDark } from '@uiw/codemirror-theme-vscode';

const state = EditorState.create({
  doc: 'my source code',
  extensions: [vscodeDark, javascript({ jsx: true })],
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

Made with [action-contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.
