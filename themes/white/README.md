<!--rehype:ignore:start-->

# White Theme

<!--rehype:ignore:end-->

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-white.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-white)

White theme for cm6, generated from [white-theme](https://github.com/xthezealot/white-theme-vscode/tree/master/themes).

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/white/dark">
  <img width="436" alt="codemirror-theme-white" src="https://github.com/uiwjs/react-codemirror/assets/1680273/dc3227c3-66c8-4df2-bc6b-efb7849fbaf2">
</a>

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/white/light">
  <img width="436" alt="codemirror-theme-white" src="https://github.com/uiwjs/react-codemirror/assets/1680273/c3954eba-b7ca-4293-b6f3-853ab988b38e">
</a>

## Install

```bash
npm install @uiw/codemirror-theme-white --save
```

```jsx
import { whiteLight, whiteLightInit, whiteDark, whiteDarkInit } from '@uiw/codemirror-theme-white';
// Or
import { whiteLight, whiteLightInit } from '@uiw/codemirror-theme-white/light';
import { whiteDark, whiteDarkInit } from '@uiw/codemirror-theme-white/dark';

<CodeMirror theme={whiteLight} />
<CodeMirror
  theme={whiteLight({
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
export declare const defaultSettingsWhiteLight: CreateThemeOptions['settings'];
export declare const whiteLightInit: (options?: Partial<CreateThemeOptions>) => import('@codemirror/state').Extension;
export declare const whiteLight: import('@codemirror/state').Extension;

export declare const defaultSettingsWhiteDark: CreateThemeOptions['settings'];
export declare const whiteDarkInit: (options?: Partial<CreateThemeOptions>) => import('@codemirror/state').Extension;
export declare const whiteDark: import('@codemirror/state').Extension;
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { whiteLight, whiteLightInit } from '@uiw/codemirror-theme-white/light';
import { javascript } from '@codemirror/lang-javascript';

function App() {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      theme={whiteLight}
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
import { whiteDark, whiteDarkInit } from '@uiw/codemirror-theme-white/dark';

const state = EditorState.create({
  doc: 'my source code',
  extensions: [whiteDark, javascript({ jsx: true })],
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
