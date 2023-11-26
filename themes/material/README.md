<!--rehype:ignore:start-->

# Material Theme

<!--rehype:ignore:end-->

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-material.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-material)

This package implements the [Material](https://material.io/tools/color/) Dark theme for the CodeMirror code editor.

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/material/dark">
  <img width="436" alt="codemirror-theme-material" src="https://user-images.githubusercontent.com/1680273/205537793-79f9c99c-831a-4ce3-8189-78b42896656f.png">
</a>

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/material/light">
  <img width="436" alt="codemirror-theme-material" src="https://user-images.githubusercontent.com/1680273/206124615-b3896e2c-d299-4609-b1d9-523ea1cf9f5b.png">
</a>

## Install

```bash
npm install @uiw/codemirror-theme-material --save
```

```jsx
import { materialDark, materialDarkInit, materialLight, materialLightInit } from '@uiw/codemirror-theme-material';

// materialInit === materialDarkInit
// material === materialDark

<CodeMirror theme={material} />
<CodeMirror
  theme={materialInit({
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
export declare const defaultSettingsMaterial: CreateThemeOptions['settings'];
export declare const defaultSettingsMaterialDark: import('@uiw/codemirror-themes').Settings;
export declare const materialInit: (options?: Partial<CreateThemeOptions>) => import('@codemirror/state').Extension;
export declare const materialDarkInit: (options?: Partial<CreateThemeOptions>) => import('@codemirror/state').Extension;
export declare const materialDark: import('@codemirror/state').Extension;
export declare const material: import('@codemirror/state').Extension;
export declare const defaultSettingsMaterialLight: CreateThemeOptions['settings'];
export declare const materialLightInit: (
  options?: Partial<CreateThemeOptions>,
) => import('@codemirror/state').Extension;
export declare const materialLight: import('@codemirror/state').Extension;
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { material } from '@uiw/codemirror-theme-material';
import { javascript } from '@codemirror/lang-javascript';

function App() {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      theme={material}
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
import { material } from '@uiw/codemirror-theme-material';

const state = EditorState.create({
  doc: 'my source code',
  extensions: [material, javascript({ jsx: true })],
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
