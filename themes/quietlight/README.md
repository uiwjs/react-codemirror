<!--rehype:ignore:start-->

# Quietlight Theme

<!--rehype:ignore:end-->

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-quietlight.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-quietlight)

Quietlight theme for cm6, generated from [vscode themes](https://github.com/microsoft/vscode/blob/main/extensions/theme-quietlight/themes/quietlight-color-theme.json).

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/quietlight">
  <img width="436" alt="codemirror-theme-quietlight" src="https://github.com/uiwjs/react-codemirror/assets/1680273/3137facb-8db7-4805-bd5c-9818d5ff49ae">
</a>

## Install

```bash
npm install @uiw/codemirror-theme-quietlight --save
```

```jsx
import { quietlight, quietlightInit } from '@uiw/codemirror-theme-quietlight';

<CodeMirror theme={quietlight} />
<CodeMirror
  theme={quietlightInit({
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
export declare const quietlightInit: (options?: Partial<CreateThemeOptions>) => import('@codemirror/state').Extension;
export declare const quietlight: import('@codemirror/state').Extension;
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { quietlight } from '@uiw/codemirror-theme-quietlight';
import { javascript } from '@codemirror/lang-javascript';

function App() {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      theme={quietlight}
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
import { quietlight } from '@uiw/codemirror-theme-quietlight';

const state = EditorState.create({
  doc: 'my source code',
  extensions: [quietlight, javascript({ jsx: true })],
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
