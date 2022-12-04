<!--rehype:ignore:start-->

# Gruvbox Dark Theme

<!--rehype:ignore:end-->

[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-gruvbox-dark.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-gruvbox-dark)

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/gruvbox/dark">
  <img width="436" alt="codemirror-theme-eclipse" src="https://user-images.githubusercontent.com/1680273/201111051-c38a73ca-a449-4c01-a4ff-4a675886ca9d.png">
</a>

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/gruvbox/light">
  <img width="436" alt="codemirror-theme-eclipse" src="https://user-images.githubusercontent.com/1680273/205499803-e1e2e214-dc3e-488a-9037-ba979e5ce199.png">
</a>

## Install

```bash
npm install @uiw/codemirror-theme-gruvbox-dark --save
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { gruvboxDark, gruvboxLight } from '@uiw/codemirror-theme-gruvbox-dark';
import { javascript } from '@codemirror/lang-javascript';

function App() {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      theme={gruvboxDark}
      extensions={[javascript({ jsx: true })]}
    />
  );
}
export default App;
```

```js
import { EditorView } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { javascript } from '@codemirror/lang-javascript';
import { gruvboxDark } from '@uiw/codemirror-theme-gruvbox-dark';

const state = EditorState.create({
  doc: 'my source code',
  extensions: [gruvboxDark, javascript({ jsx: true })],
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
