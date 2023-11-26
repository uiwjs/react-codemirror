<!--rehype:ignore:start-->

# Abyss Theme

<!--rehype:ignore:end-->

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-abyss.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-abyss)

Abyss theme for cm6, generated from [vscode themes](https://github.com/microsoft/vscode/blob/main/extensions/theme-abyss/themes/abyss-color-theme.json).

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/abyss">
  <img width="436" alt="codemirror-theme-abyss" src="https://github.com/uiwjs/react-codemirror/assets/1680273/b1b59053-d370-485e-9dcc-2987b39197a1">
</a>

## Install

```bash
npm install @uiw/codemirror-theme-abyss --save
```

```jsx
import { abyss, abyssInit } from '@uiw/codemirror-theme-abyss';

<CodeMirror theme={abyss} />
<CodeMirror
  theme={abyssInit({
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
export declare const abyssInit: (options?: Partial<CreateThemeOptions>) => import('@codemirror/state').Extension;
export declare const abyss: import('@codemirror/state').Extension;
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { abyss } from '@uiw/codemirror-theme-abyss';
import { javascript } from '@codemirror/lang-javascript';

function App() {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      theme={abyss}
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
import { abyss } from '@uiw/codemirror-theme-abyss';

const state = EditorState.create({
  doc: 'my source code',
  extensions: [abyss, javascript({ jsx: true })],
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
