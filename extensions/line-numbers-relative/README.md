<!--rehype:ignore:start-->

# Relative Line Numbers Extensions

<!--rehype:ignore:end-->

[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-extensions-line-numbers-relative.svg)](https://www.npmjs.com/package/@uiw/codemirror-extensions-line-numbers-relative)

Relative line numbers Extensions for CodeMirror6.

[![Relative line numbers Extensions](https://user-images.githubusercontent.com/1680273/178180348-c53b4b91-527c-4a90-9e60-20269ef9a598.png)](https://uiwjs.github.io/react-codemirror/#/extensions/line-numbers-relative)

## Install

```bash
npm install @uiw/codemirror-extensions-line-numbers-relative --save
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { lineNumbersRelative } from '@uiw/codemirror-extensions-line-numbers-relative';

function App() {
  return <CodeMirror value="console.log('hello world!');" height="200px" extensions={[lineNumbersRelative]} />;
}
export default App;
```

```js
import { EditorView } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { lineNumbersRelative } from '@uiw/codemirror-extensions-line-numbers-relative';

const state = EditorState.create({
  doc: 'my source code',
  extensions: [lineNumbersRelative],
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
