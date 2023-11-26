<!--rehype:ignore:start-->

# Basic Theme (dark/light)

<!--rehype:ignore:end-->

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-basic.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-basic)

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/basic/dark">
  <img width="436" alt="codemirror-theme-basic dark" src="https://github.com/uiwjs/react-codemirror/assets/1680273/977c1271-eca1-4f61-ad90-3a89f4ea4871">
</a>

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/basic/light">
  <img width="436" alt="codemirror-theme-basic light" src="https://github.com/uiwjs/react-codemirror/assets/1680273/e5b43612-5190-4d5b-ab7a-0f5d369ad7e4">
</a>

## Install

```bash
npm install @uiw/codemirror-theme-basic --save
```

```jsx
import { basicLight, basicLightInit, basicDark, basicDarkInit } from '@uiw/codemirror-theme-basic';
// Or
import { basicDark, basicDarkInit } from '@uiw/codemirror-theme-basic/dark';
import { basicLight, basicLightInit } from '@uiw/codemirror-theme-basic/light';

<CodeMirror theme={basicLight} />
<CodeMirror
  theme={basicLightInit({
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
export declare const defaultSettingsBasicLight: CreateThemeOptions['settings'];
export declare const basicLightInit: (options?: Partial<CreateThemeOptions>) => import('@codemirror/state').Extension;
export declare const basicLight: import('@codemirror/state').Extension;
export declare const defaultSettingsBasicDark: CreateThemeOptions['settings'];
export declare const basicDarkInit: (options?: Partial<CreateThemeOptions>) => import('@codemirror/state').Extension;
export declare const basicDark: import('@codemirror/state').Extension;
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { basicLight, basicDark } from '@uiw/codemirror-theme-basic';
import { javascript } from '@codemirror/lang-javascript';

function App() {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      theme={basicLight}
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
import { basicLight, basicDark } from '@uiw/codemirror-theme-basic';

const state = EditorState.create({
  doc: 'my source code',
  extensions: [basicDark, javascript({ jsx: true })],
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

by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)
