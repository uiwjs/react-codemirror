<!--rehype:ignore:start-->

# Abcdef Theme

<!--rehype:ignore:end-->

[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-abcdef.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-abcdef)

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/abcdef">
  <img width="436" alt="codemirror-theme-abcdef" src="https://user-images.githubusercontent.com/1680273/176573508-705562ad-16ec-4b16-994e-f235a9331a3f.png">
</a>

## Install

```bash
npm install @uiw/codemirror-theme-abcdef --save
```

```jsx
import { tags as t } from '@lezer/highlight';
import { abcdef, abcdefInit } from '@uiw/codemirror-theme-abcdef';

<CodeMirror theme={abcdef} />
<CodeMirror
  theme={abcdefInit({
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
export declare const abcdefInit: (options?: CreateThemeOptions) => import('@codemirror/state').Extension;
export declare const abcdef: import('@codemirror/state').Extension;
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { abcdef } from '@uiw/codemirror-theme-abcdef';
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
import { abcdef } from '@uiw/codemirror-theme-abcdef';

const state = EditorState.create({
  doc: 'my source code',
  extensions: [abcdef, javascript({ jsx: true })],
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
