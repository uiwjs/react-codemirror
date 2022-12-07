<!--rehype:ignore:start-->

# Gruvbox Dark Theme

<!--rehype:ignore:end-->

[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-gruvbox-dark.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-gruvbox-dark)

This package implements the [gruvbox](https://github.com/morhetz/gruvbox) light theme for the CodeMirror code editor.

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/gruvbox/dark">
  <img width="436" alt="codemirror-theme-gruvbox-dark" src="https://user-images.githubusercontent.com/1680273/206087857-d0a85219-34ad-4e79-9cdf-183f67e1085d.png">
</a>

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/gruvbox/light">
  <img width="436" alt="codemirror-theme-eclipse" src="https://user-images.githubusercontent.com/1680273/206087911-49db6624-ab8c-434e-9b8a-84132fe206f9.png">
</a>

## Install

```bash
npm install @uiw/codemirror-theme-gruvbox-dark --save
```

```jsx
import { gruvboxDark, gruvboxDarkInit, gruvboxLight, gruvboxLightInit } from '@uiw/codemirror-theme-nord';

<CodeMirror theme={gruvboxDark} />
<CodeMirror
  theme={gruvboxDarkInit({
    settings: {
      caret: '#c6c6c6',
      fontFamily: 'monospace',
    }
  })}
/>
```

## API

```tsx
import { CreateThemeOptions } from '@uiw/codemirror-themes';
export declare const gruvboxDarkInit: (options?: CreateThemeOptions) => import('@codemirror/state').Extension;
export declare const gruvboxDark: import('@codemirror/state').Extension;
export declare const gruvboxLightInit: (options?: CreateThemeOptions) => import('@codemirror/state').Extension;
export declare const gruvboxLight: import('@codemirror/state').Extension;
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
