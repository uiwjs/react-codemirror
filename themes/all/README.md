<!--rehype:ignore:start-->

# Themes all for CodeMirror 6.

<!--rehype:ignore:end-->

[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-themes-all.svg)](https://www.npmjs.com/package/@uiw/codemirror-themes-all)

## Install

```bash
npm install @uiw/codemirror-themes-all --save
```

```js
import * as themes from '@uiw/codemirror-themes-all';
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { abcdef } from '@uiw/codemirror-themes-all';
import { javascript } from '@codemirror/lang-javascript';

function App() {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      theme={abcdef}
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
import { abcdef } from '@uiw/codemirror-themes-all';

const state = EditorState.create({
  doc: 'my source code',
  extensions: [abcdef, javascript({ jsx: true })],
});

const view = new EditorView({
  parent: document.querySelector('#editor'),
  state,
});
```

## API

```ts
export * from '@uiw/codemirror-theme-abcdef';
export * from '@uiw/codemirror-theme-androidstudio';
export * from '@uiw/codemirror-theme-atomone';
export * from '@uiw/codemirror-theme-aura';
export * from '@uiw/codemirror-theme-bbedit';
export * from '@uiw/codemirror-theme-bespin';
export * from '@uiw/codemirror-theme-darcula';
export * from '@uiw/codemirror-theme-dracula';
export * from '@uiw/codemirror-theme-duotone';
export * from '@uiw/codemirror-theme-eclipse';
export * from '@uiw/codemirror-theme-github';
export * from '@uiw/codemirror-theme-gruvbox-dark';
export * from '@uiw/codemirror-theme-material';
export * from '@uiw/codemirror-theme-noctis-lilac';
export * from '@uiw/codemirror-theme-nord';
export * from '@uiw/codemirror-theme-okaidia';
export * from '@uiw/codemirror-theme-solarized';
export * from '@uiw/codemirror-theme-sublime';
export * from '@uiw/codemirror-theme-tokyo-night';
export * from '@uiw/codemirror-theme-tokyo-night-storm';
export * from '@uiw/codemirror-theme-tokyo-night-day';
export * from '@uiw/codemirror-theme-vscode';
export * from '@uiw/codemirror-theme-xcode';
```

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/uiwjs/react-codemirror/graphs/contributors">
  <img src="https://uiwjs.github.io/react-codemirror/CONTRIBUTORS.svg" />
</a>

Made with [github-action-contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.
