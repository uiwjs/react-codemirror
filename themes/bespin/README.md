<!--rehype:ignore:start-->

# Bespin Theme

<!--rehype:ignore:end-->

[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-bespin.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-bespin)

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/bespin">
  <img width="436" alt="codemirror-theme-bespin" src="https://user-images.githubusercontent.com/1680273/176573408-0fd54981-471a-4ef8-91d4-8ad4b159c1e0.png">
</a>

## Install

```bash
npm install @uiw/codemirror-theme-bespin --save
```

```jsx
import { tags as t } from '@lezer/highlight';
import { bespin, bespinInit } from '@uiw/codemirror-theme-bespin';

<CodeMirror theme={bespin} />
<CodeMirror
  theme={bespinInit({
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
export declare const bespinInit: (options?: CreateThemeOptions) => import('@codemirror/state').Extension;
export declare const bespin: import('@codemirror/state').Extension;
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { bespin } from '@uiw/codemirror-theme-bespin';
import { javascript } from '@codemirror/lang-javascript';

function App() {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      theme={bespin}
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
import { bespin } from '@uiw/codemirror-theme-bespin';

const state = EditorState.create({
  doc: 'my source code',
  extensions: [bespin, javascript({ jsx: true })],
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
