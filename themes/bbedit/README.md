<!--rehype:ignore:start-->

# BBEdit Theme

<!--rehype:ignore:end-->

[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-bbedit.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-bbedit)

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/bbedit">
  <img width="436" alt="codemirror-theme-bbedit" src="https://user-images.githubusercontent.com/1680273/183550552-df398e5b-fab2-4ce5-bdd0-5e3612e3e5d9.png">
</a>

## Install

```bash
npm install @uiw/codemirror-theme-bbedit --save
```

```jsx
import { tags as t } from '@lezer/highlight';
import { bbedit, bbeditInit } from '@uiw/codemirror-theme-bbedit';

<CodeMirror theme={bbedit} />
<CodeMirror
  theme={bbeditInit({
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
export declare const bbeditInit: (options?: CreateThemeOptions) => import('@codemirror/state').Extension;
export declare const bbedit: import('@codemirror/state').Extension;
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { bbedit } from '@uiw/codemirror-theme-bbedit';
import { javascript } from '@codemirror/lang-javascript';

function App() {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      theme={bbedit}
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
import { bbedit } from '@uiw/codemirror-theme-bbedit';

const state = EditorState.create({
  doc: 'my source code',
  extensions: [bbedit, javascript({ jsx: true })],
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
