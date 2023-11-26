<!--rehype:ignore:start-->

# Monokai Theme

<!--rehype:ignore:end-->

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-monokai.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-monokai)

Monokai theme for cm6, generated from [vscode themes](https://github.com/microsoft/vscode/blob/main/extensions/theme-monokai/themes/monokai-color-theme.json).

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/monokai">
  <img width="436" alt="codemirror-theme-monokai" src="https://github.com/uiwjs/react-codemirror/assets/1680273/07df9125-6d96-413b-b863-1eef945b99e3">
</a>

## Install

```bash
npm install @uiw/codemirror-theme-monokai --save
```

```jsx
import { monokai, monokaiInit } from '@uiw/codemirror-theme-monokai';

<CodeMirror theme={monokai} />
<CodeMirror
  theme={monokaiInit({
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
export declare const monokaiInit: (options?: Partial<CreateThemeOptions>) => import('@codemirror/state').Extension;
export declare const monokai: import('@codemirror/state').Extension;
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { monokai } from '@uiw/codemirror-theme-monokai';
import { javascript } from '@codemirror/lang-javascript';

function App() {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      theme={monokai}
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
import { monokai } from '@uiw/codemirror-theme-monokai';

const state = EditorState.create({
  doc: 'my source code',
  extensions: [monokai, javascript({ jsx: true })],
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
