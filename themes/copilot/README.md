<!--rehype:ignore:start-->

# Copilot Theme

<!--rehype:ignore:end-->

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-copilot.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-copilot)

Copilot theme for cm6, generated from [copilot-theme](https://github.com/benjaminbenais/copilot-theme/blob/main/themes/Copilot%20Theme-color-theme.json).

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/copilot">
  <img width="436" alt="codemirror-theme-copilot" src="https://github.com/uiwjs/react-codemirror/assets/1680273/4018a332-6cfb-4586-b3dc-86a60f12a3f7">
</a>

## Install

```bash
npm install @uiw/codemirror-theme-copilot --save
```

```jsx
import { copilot, copilotInit } from '@uiw/codemirror-theme-copilot';

<CodeMirror theme={copilot} />
<CodeMirror
  theme={copilotInit({
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
export declare const copilotInit: (options?: Partial<CreateThemeOptions>) => import('@codemirror/state').Extension;
export declare const copilot: import('@codemirror/state').Extension;
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { copilot } from '@uiw/codemirror-theme-copilot';
import { javascript } from '@codemirror/lang-javascript';

function App() {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      theme={copilot}
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
import { copilot } from '@uiw/codemirror-theme-copilot';

const state = EditorState.create({
  doc: 'my source code',
  extensions: [copilot, javascript({ jsx: true })],
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
