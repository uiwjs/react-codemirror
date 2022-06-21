<!--rehype:ignore:start-->

# Duotone Theme

<!--rehype:ignore:end-->

[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-duotone.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-duotone)

## Install

```bash
npm install @uiw/codemirror-theme-duotone --save
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { duotoneLight, duotoneDark } from '@uiw/codemirror-theme-duotone';
import { javascript } from '@codemirror/lang-javascript';

function App() {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      theme={duotoneLight}
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
import { duotoneLight, duotoneDark } from '@uiw/codemirror-theme-duotone';

const state = EditorState.create({
  doc: 'my source code',
  extensions: [duotoneDark, javascript({ jsx: true })],
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

by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)
