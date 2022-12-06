<!--rehype:ignore:start-->

# Solarized Theme

<!--rehype:ignore:end-->

[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-solarized.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-solarized)

This package implements the [Solarized](https://ethanschoonover.com/solarized/) theme for the CodeMirror code editor.

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/solarized/light">
  <img width="436" alt="codemirror-theme-solarized" src="https://user-images.githubusercontent.com/1680273/205544435-a080d1d4-6da9-4f1d-aa10-5f2207d31176.png">
</a>

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/solarized/dark">
  <img width="436" alt="codemirror-theme-solarized" src="https://user-images.githubusercontent.com/1680273/205547403-96db62c3-d061-4dee-88d0-c86ed17e7489.png">
</a>

## Install

```bash
npm install @uiw/codemirror-theme-solarized --save
```

```jsx
import { solarizedLight, solarizedLightInit, solarizedDark, solarizedDarkInit } from '@uiw/codemirror-theme-solarized';

<CodeMirror theme={solarizedLight} />
<CodeMirror
  theme={solarizedLightInit({
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
export declare const solarizedLightInit: (options?: CreateThemeOptions) => import('@codemirror/state').Extension;
export declare const solarizedLight: import('@codemirror/state').Extension;
export declare const solarizedDarkInit: (options?: CreateThemeOptions) => import('@codemirror/state').Extension;
export declare const solarizedDark: import('@codemirror/state').Extension;
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { solarizedLight, solarizedDark } from '@uiw/codemirror-theme-solarized';
import { javascript } from '@codemirror/lang-javascript';

function App() {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      theme={solarizedLight}
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
import { solarizedLight, solarizedDark } from '@uiw/codemirror-theme-solarized';

const state = EditorState.create({
  doc: 'my source code',
  extensions: [solarizedLight, javascript({ jsx: true })],
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
