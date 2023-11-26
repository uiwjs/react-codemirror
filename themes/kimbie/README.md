<!--rehype:ignore:start-->

# Kimbie Theme

<!--rehype:ignore:end-->

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-kimbie.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-kimbie)

Kimbie theme for cm6, generated from [vscode themes](https://github.com/microsoft/vscode/blob/main/extensions/theme-kimbie-dark/themes/kimbie-dark-color-theme.json).

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/kimbie">
  <img width="436" alt="codemirror-theme-kimbie" src="https://github.com/uiwjs/react-codemirror/assets/1680273/859e75f6-cc7c-4182-ac92-dbf3168784b0">
</a>

## Install

```bash
npm install @uiw/codemirror-theme-kimbie --save
```

```jsx
import { kimbie, kimbieInit } from '@uiw/codemirror-theme-kimbie';

<CodeMirror theme={kimbie} />
<CodeMirror
  theme={kimbieInit({
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
export declare const kimbieInit: (options?: Partial<CreateThemeOptions>) => import('@codemirror/state').Extension;
export declare const kimbie: import('@codemirror/state').Extension;
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { kimbie } from '@uiw/codemirror-theme-kimbie';
import { javascript } from '@codemirror/lang-javascript';

function App() {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      theme={kimbie}
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
import { kimbie } from '@uiw/codemirror-theme-kimbie';

const state = EditorState.create({
  doc: 'my source code',
  extensions: [kimbie, javascript({ jsx: true })],
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
