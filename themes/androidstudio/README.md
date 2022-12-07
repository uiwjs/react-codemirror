<!--rehype:ignore:start-->

# AndroidStudio Theme

<!--rehype:ignore:end-->

[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-androidstudio.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-androidstudio)

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/androidstudio">
  <img width="436" alt="codemirror-theme-androidstudio" src="https://user-images.githubusercontent.com/1680273/177484354-0a4fa43e-de96-409f-83e2-61808f2347e6.png">
</a>

## Install

```bash
npm install @uiw/codemirror-theme-androidstudio --save
```

```jsx
import { tags as t } from '@lezer/highlight';
import { androidstudio, androidstudioInit } from '@uiw/codemirror-theme-androidstudio';

<CodeMirror theme={androidstudio} />
<CodeMirror
  theme={androidstudioInit({
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
export declare const androidstudioInit: (options?: CreateThemeOptions) => import('@codemirror/state').Extension;
export declare const androidstudio: import('@codemirror/state').Extension;
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { androidstudio } from '@uiw/codemirror-theme-androidstudio';
import { javascript } from '@codemirror/lang-javascript';

function App() {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      theme={androidstudio}
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
import { androidstudio } from '@uiw/codemirror-theme-androidstudio';

const state = EditorState.create({
  doc: 'my source code',
  extensions: [androidstudio, javascript({ jsx: true })],
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
