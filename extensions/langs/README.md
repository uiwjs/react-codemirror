<!--rehype:ignore:start-->

# Load languages Extensions

<!--rehype:ignore:end-->

[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-extensions-langs.svg)](https://www.npmjs.com/package/@uiw/codemirror-extensions-langs)

Load languages Extensions for CodeMirror6.

## Install

```bash
npm install @uiw/codemirror-extensions-langs --save
```

```jsx
import { loadLanguage, langNames, langs } from '@uiw/codemirror-extensions-langs';

loadLanguage('tsx');

langs.tsx();

console.log('langNames:', langNames); // => "jsx" | "typescript" | "javascript" | "tsx"
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { langs } from '@uiw/codemirror-extensions-langs';

function App() {
  return <CodeMirror value="console.log('hello world!');" height="200px" extensions={[langs.tsx()]} />;
}
export default App;
```

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { loadLanguage } from '@uiw/codemirror-extensions-langs';

function App() {
  return <CodeMirror value="console.log('hello world!');" height="200px" extensions={[loadLanguage('tsx')]} />;
}
export default App;
```

```js
import { EditorView } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { loadLanguage, langs } from '@uiw/codemirror-extensions-langs';

const state = EditorState.create({
  doc: 'my source code',
  extensions: [langs.jsx()],
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
