<!--rehype:ignore:start-->

# Red Theme

<!--rehype:ignore:end-->

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-red.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-red)

Red theme for cm6, generated from [vscode themes](https://github.com/microsoft/vscode/blob/main/extensions/theme-red/themes/Red-color-theme.json).

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/red">
  <img width="436" alt="codemirror-theme-red" src="https://github.com/uiwjs/react-codemirror/assets/1680273/aef0a618-8c74-4466-9a04-35e368f582a7">
</a>

## Install

```bash
npm install @uiw/codemirror-theme-red --save
```

```jsx
import { red, redInit } from '@uiw/codemirror-theme-red';

<CodeMirror theme={red} />
<CodeMirror
  theme={redInit({
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
export declare const defaultSettingsQuietlight: CreateThemeOptions['settings'];
export declare const redInit: (options?: Partial<CreateThemeOptions>) => import('@codemirror/state').Extension;
export declare const red: import('@codemirror/state').Extension;
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { red } from '@uiw/codemirror-theme-red';
import { javascript } from '@codemirror/lang-javascript';

function App() {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      theme={red}
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
import { red } from '@uiw/codemirror-theme-red';

const state = EditorState.create({
  doc: 'my source code',
  extensions: [red, javascript({ jsx: true })],
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
