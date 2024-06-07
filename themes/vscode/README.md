<!--rehype:ignore:start-->

# VSCode Theme

<!--rehype:ignore:end-->

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-vscode.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-vscode)

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/vscode/dark">
  <img width="436" alt="codemirror-theme-vscode dark" src="https://user-images.githubusercontent.com/1680273/202690670-385808e2-6346-4e36-a3d6-6d9fc1f216dc.png">
</a>

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/vscode/light">
  <img width="436" alt="codemirror-theme-vscode light" src="https://github.com/uiwjs/react-codemirror/assets/1680273/81b870f6-36b9-46ee-9ded-1650ba8eebc8">
</a>

## Install

```bash
npm install @uiw/codemirror-theme-vscode --save
```

```jsx
import { vscodeDark, vscodeDarkInit } from '@uiw/codemirror-theme-vscode';
import { vscodeLight, vscodeLightInit } from '@uiw/codemirror-theme-vscode';
```

```js
import { EditorState } from '@codemirror/state';
import { javascript } from '@codemirror/lang-javascript';
import { vscodeDark, vscodeLight } from '@uiw/codemirror-theme-vscode';

const state = EditorState.create({
  doc: 'my source code',
  extensions: [vscodeDark, javascript({ jsx: true })],
});
```

Using in React:

```jsx
import { vscodeDark, vscodeDarkInit } from '@uiw/codemirror-theme-vscode';

<CodeMirror theme={vscodeDark} />
<CodeMirror
  theme={vscodeDarkInit({
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
// Dark
export declare const defaultSettingsVscodeDark: CreateThemeOptions['settings'];
export declare function vscodeDarkInit(options?: Partial<CreateThemeOptions>): import('@codemirror/state').Extension;
export declare const vscodeDark: import('@codemirror/state').Extension;
// Light
export declare const defaultSettingsVscodeLight: CreateThemeOptions['settings'];
export declare function vscodeLightInit(options?: Partial<CreateThemeOptions>): import('@codemirror/state').Extension;
export declare const vscodeLight: import('@codemirror/state').Extension;
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';

function App() {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      theme={vscodeDark}
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
import { vscodeDark } from '@uiw/codemirror-theme-vscode';

const state = EditorState.create({
  doc: 'my source code',
  extensions: [vscodeDark, javascript({ jsx: true })],
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

Made with [action-contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.
