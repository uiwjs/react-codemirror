<!--rehype:ignore:start-->

# NoctisLilac Theme

<!--rehype:ignore:end-->

[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-noctis-lilac.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-noctis-lilac)

This package implements the noctis-lilac for the CodeMirror code editor.

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/noctis-lilac">
  <img width="436" alt="codemirror-theme-noctis-lilac" src="https://user-images.githubusercontent.com/1680273/206088068-55e9a25b-eb77-4e1a-91bb-f39cbba84981.png">
</a>

## Install

```bash
npm install @uiw/codemirror-theme-noctis-lilac --save
```

```jsx
import { noctisLilac, noctisLilacInit } from '@uiw/codemirror-theme-noctis-lilac';

<CodeMirror theme={noctisLilac} />
<CodeMirror
  theme={noctisLilacInit({
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
export declare const noctisLilacInit: (options?: CreateThemeOptions) => import('@codemirror/state').Extension;
export declare const noctisLilac: import('@codemirror/state').Extension;
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { noctisLilac } from '@uiw/codemirror-theme-noctis-lilac';
import { javascript } from '@codemirror/lang-javascript';

function App() {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      theme={noctisLilac}
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
import { noctisLilac } from '@uiw/codemirror-theme-noctis-lilac';

const state = EditorState.create({
  doc: 'my source code',
  extensions: [noctisLilac, javascript({ jsx: true })],
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
