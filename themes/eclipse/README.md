<!--rehype:ignore:start-->

# Eclipse Theme

<!--rehype:ignore:end-->

[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-eclipse.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-eclipse)

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/eclipse">
  <img width="436" alt="codemirror-theme-eclipse" src="https://user-images.githubusercontent.com/1680273/176572785-4f56f11a-018b-4f86-9088-e6f71f745cfb.png">
</a>

## Install

```bash
npm install @uiw/codemirror-theme-eclipse --save
```

```jsx
import { eclipse, eclipseInit } from '@uiw/codemirror-theme-eclipse';

<CodeMirror theme={eclipse} />
<CodeMirror
  theme={eclipseInit({
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
export declare const eclipseInit: (options?: CreateThemeOptions) => import('@codemirror/state').Extension;
export declare const eclipse: import('@codemirror/state').Extension;
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { eclipse } from '@uiw/codemirror-theme-eclipse';
import { javascript } from '@codemirror/lang-javascript';

function App() {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      theme={eclipse}
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
import { eclipse } from '@uiw/codemirror-theme-eclipse';

const state = EditorState.create({
  doc: 'my source code',
  extensions: [eclipse, javascript({ jsx: true })],
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
