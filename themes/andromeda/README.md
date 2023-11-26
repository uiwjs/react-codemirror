<!--rehype:ignore:start-->

# Andromeda Theme

<!--rehype:ignore:end-->

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-abyss.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-andromeda)

Andromeda theme for cm6, generated from [vscode themes](https://github.com/EliverLara/Andromeda/blob/master/themes/Andromeda-color-theme.json).

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/andromeda">
  <img width="436" alt="codemirror-theme-andromeda" src="https://github.com/uiwjs/react-codemirror/assets/1680273/8dabf62f-6258-4d42-8768-113c9f089c79">
</a>

## Install

```bash
npm install @uiw/codemirror-theme-andromeda --save
```

```jsx
import { andromeda, andromedaInit } from '@uiw/codemirror-theme-andromeda';

<CodeMirror theme={andromeda} />
<CodeMirror
  theme={andromedaInit({
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
export declare const andromedaInit: (options?: Partial<CreateThemeOptions>) => import('@codemirror/state').Extension;
export declare const andromeda: import('@codemirror/state').Extension;
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { andromeda } from '@uiw/codemirror-theme-andromeda';
import { javascript } from '@codemirror/lang-javascript';

function App() {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      theme={andromeda}
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
import { andromeda } from '@uiw/codemirror-theme-andromeda';

const state = EditorState.create({
  doc: 'my source code',
  extensions: [andromeda, javascript({ jsx: true })],
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
