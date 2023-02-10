<!--rehype:ignore:start-->

# Dracula Theme

<!--rehype:ignore:end-->

[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-dracula.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-dracula)

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/dracula">
  <img width="436" alt="codemirror-theme-dracula" src="https://user-images.githubusercontent.com/1680273/176573236-43928ba2-0eb1-4b59-9495-d39b6e3df81c.png">
</a>

## Install

```bash
npm install @uiw/codemirror-theme-dracula --save
```

```jsx
import { tags as t } from '@lezer/highlight';
import { dracula, draculaInit } from '@uiw/codemirror-theme-dracula';

<CodeMirror theme={dracula} />
<CodeMirror
  theme={draculaInit({
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
export declare const defaultSettingsDracula: CreateThemeOptions['settings'];
export declare const draculaInit: (options?: Partial<CreateThemeOptions>) => import('@codemirror/state').Extension;
export declare const dracula: import('@codemirror/state').Extension;
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { javascript } from '@codemirror/lang-javascript';

function App() {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      theme={dracula}
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
import { dracula } from '@uiw/codemirror-theme-dracula';

const state = EditorState.create({
  doc: 'my source code',
  extensions: [dracula, javascript({ jsx: true })],
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
