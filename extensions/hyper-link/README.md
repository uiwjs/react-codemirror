<!--rehype:ignore:start-->

# Hyper link Extensions

<!--rehype:ignore:end-->

[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-extensions-hyper-link.svg)](https://www.npmjs.com/package/@uiw/codemirror-extensions-hyper-link)

Hyper link Extensions for CodeMirror6.

## Install

```bash
npm install @uiw/codemirror-extensions-hyper-link --save
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { hyperLink } from '@uiw/codemirror-extensions-hyper-link';

const code = `https://uiwjs.github.io/react-codemirror`;

function App() {
  return <CodeMirror value={code} height="200px" extensions={[hyperLink]} />;
}
export default App;
```

```js
import { EditorView } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { hyperLink } from '@uiw/codemirror-extensions-hyper-link';

const code = `https://uiwjs.github.io/react-codemirror`;

const state = EditorState.create({
  doc: code,
  extensions: [hyperLink],
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
