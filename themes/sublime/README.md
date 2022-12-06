<!--rehype:ignore:start-->

# Sublime Theme

<!--rehype:ignore:end-->

[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-sublime.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-sublime)

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/sublime">
  <img width="436" alt="codemirror-theme-sublime" src="https://user-images.githubusercontent.com/1680273/176572314-cc296f81-0763-485c-8fa2-7d61b24ad09b.png">
</a>

## Install

```bash
npm install @uiw/codemirror-theme-sublime --save
```

```jsx
import { sublime, sublimeInit } from '@uiw/codemirror-theme-sublime';

<CodeMirror theme={sublime} />
<CodeMirror
  theme={sublimeInit({
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
export declare function sublimeInit(options?: CreateThemeOptions): import('@codemirror/state').Extension;
export declare const sublime: import('@codemirror/state').Extension;
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { sublime } from '@uiw/codemirror-theme-sublime';
import { javascript } from '@codemirror/lang-javascript';

function App() {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      theme={sublime}
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
import { sublime } from '@uiw/codemirror-theme-sublime';

const state = EditorState.create({
  doc: 'my source code',
  extensions: [sublime, javascript({ jsx: true })],
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
