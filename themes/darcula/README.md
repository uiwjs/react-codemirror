<!--rehype:ignore:start-->

# Darcula Theme

<!--rehype:ignore:end-->

[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-darcula.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-darcula)

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/darcula">
  <img width="436" alt="codemirror-theme-darcula" src="https://user-images.githubusercontent.com/1680273/176573321-3015b1b4-3455-497f-ad16-dd2090d7848d.png">
</a>

## Install

```bash
npm install @uiw/codemirror-theme-darcula --save
```

```jsx
import { tags as t } from '@lezer/highlight';
import { darcula, darculaInit } from '@uiw/codemirror-theme-darcula';

<CodeMirror theme={darcula} />
<CodeMirror
  theme={darculaInit({
    settings: {
      caret: '#c6c6c6',
      fontFamily: 'monospace',
    },
    styles: [
      { tag: t.comment, color: '#6272a4' },
    ]
  })}
/>
```

## API

```tsx
import { CreateThemeOptions } from '@uiw/codemirror-themes';
export declare const darculaInit: (options?: CreateThemeOptions) => import('@codemirror/state').Extension;
export declare const darcula: import('@codemirror/state').Extension;
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { darcula } from '@uiw/codemirror-theme-darcula';
import { javascript } from '@codemirror/lang-javascript';

function App() {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      theme={darcula}
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
import { darcula } from '@uiw/codemirror-theme-darcula';

const state = EditorState.create({
  doc: 'my source code',
  extensions: [darcula, javascript({ jsx: true })],
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
