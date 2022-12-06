<!--rehype:ignore:start-->

# Okaidia Theme

<!--rehype:ignore:end-->

[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-okaidia.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-okaidia)

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/okaidia">
  <img width="436" alt="codemirror-theme-okaidia" src="https://user-images.githubusercontent.com/1680273/176572694-b9aface9-9646-4e0e-a211-a8aa92dabc31.png">
</a>

## Install

```bash
npm install @uiw/codemirror-theme-okaidia --save
```

```jsx
import { okaidia, okaidiaInit } from '@uiw/codemirror-theme-okaidia';

<CodeMirror theme={okaidia} />
<CodeMirror
  theme={okaidiaInit({
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
export declare const okaidiaInit: (options?: CreateThemeOptions) => import('@codemirror/state').Extension;
export declare const okaidia: import('@codemirror/state').Extension;
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { javascript } from '@codemirror/lang-javascript';

function App() {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      theme={okaidia}
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
import { okaidia } from '@uiw/codemirror-theme-okaidia';

const state = EditorState.create({
  doc: 'my source code',
  extensions: [okaidia, javascript({ jsx: true })],
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
