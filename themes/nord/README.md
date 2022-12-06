<!--rehype:ignore:start-->

# Nord Theme

<!--rehype:ignore:end-->

[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-nord.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-nord)

This package implements the [nord theme](https://www.nordtheme.com/) for the CodeMirror code editor.

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/nord">
  <img width="436" alt="codemirror-theme-nord" src="https://user-images.githubusercontent.com/1680273/205498304-956bc719-1472-40f0-9c3f-21ac5b9f97a6.png">
</a>

## Install

```bash
npm install @uiw/codemirror-theme-nord --save
```

```jsx
import { nord, nordInit } from '@uiw/codemirror-theme-nord';

<CodeMirror theme={nord} />
<CodeMirror
  theme={nordInit({
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
export declare const nordInit: (options?: CreateThemeOptions) => import('@codemirror/state').Extension;
export declare const nord: import('@codemirror/state').Extension;
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { nord } from '@uiw/codemirror-theme-nord';
import { javascript } from '@codemirror/lang-javascript';

function App() {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      theme={nord}
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
import { nord } from '@uiw/codemirror-theme-nord';

const state = EditorState.create({
  doc: 'my source code',
  extensions: [nord, javascript({ jsx: true })],
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
