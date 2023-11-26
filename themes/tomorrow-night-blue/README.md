<!--rehype:ignore:start-->

# TomorrowNightBlue Theme

<!--rehype:ignore:end-->

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-tomorrow-night-blue.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-tomorrow-night-blue)

TomorrowNightBlue theme for cm6, generated from [vscode themes](https://github.com/microsoft/vscode/blob/main/extensions/theme-tomorrow-night-blue/themes/tomorrow-night-blue-color-theme.json).

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/tomorrow-night-blue">
  <img width="436" alt="codemirror-theme-tomorrow-night-blue" src="https://github.com/uiwjs/react-codemirror/assets/1680273/dcc31c7a-70d7-4c4d-bf9f-a7e8212030d8">
</a>

## Install

```bash
npm install @uiw/codemirror-theme-tomorrow-night-blue --save
```

```jsx
import { tomorrowNightBlue, tomorrowNightBlueInit } from '@uiw/codemirror-theme-tomorrow-night-blue';

<CodeMirror theme={tomorrowNightBlue} />
<CodeMirror
  theme={tomorrowNightBlueInit({
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
export declare const defaultSettingsTomorrowNightBlue: CreateThemeOptions['settings'];
export declare const tomorrowNightBlueInit: (
  options?: Partial<CreateThemeOptions>,
) => import('@codemirror/state').Extension;
export declare const tomorrowNightBlue: import('@codemirror/state').Extension;
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { tomorrowNightBlue } from '@uiw/codemirror-theme-tomorrow-night-blue';
import { javascript } from '@codemirror/lang-javascript';

function App() {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      theme={tomorrowNightBlue}
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
import { tomorrowNightBlue } from '@uiw/codemirror-theme-tomorrow-night-blue';

const state = EditorState.create({
  doc: 'my source code',
  extensions: [tomorrowNightBlue, javascript({ jsx: true })],
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
