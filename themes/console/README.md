<!--rehype:ignore:start-->

# Console Theme (dark/light)

<!--rehype:ignore:end-->

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-console.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-console)

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/console/light">
  <img width="436" alt="codemirror-theme-console light" src="https://github.com/uiwjs/react-codemirror/assets/1680273/e45284f3-97bf-4ddc-8796-319db788df6d">
</a>

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/console/dark">
  <img width="436" alt="codemirror-theme-console dark" src="https://github.com/uiwjs/react-codemirror/assets/1680273/25bae31d-1428-481a-bc04-7c3b49ae38c0">
</a>

## Motivation

One of the usages for react-codemirror is a logger component, but there is no theme with the required styles for achieving the desired feature. This theme is intended to be used when you want to have plain text in a console or terminal viewer.

## Install

```bash
npm install @uiw/codemirror-theme-console --save
```

```js
import { EditorState } from '@codemirror/state';
import { javascript } from '@codemirror/lang-javascript';
import { consoleLight, consoleDark } from '@uiw/codemirror-theme-console';

const state = EditorState.create({
  doc: 'my source code',
  extensions: [consoleDark],
});
```

Using in React:

```jsx
import { consoleLight, consoleLightInit, consoleDark, consoleDarkInit } from '@uiw/codemirror-theme-console';
// Or
import { consoleDark, consoleDarkInit } from '@uiw/codemirror-theme-console/dark';
import { consoleLight, consoleLightInit } from '@uiw/codemirror-theme-console/light';

<CodeMirror theme={consoleLight} />
<CodeMirror
  theme={consoleLightInit({
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
export declare const defaultSettingsConsoleLight: CreateThemeOptions['settings'];
export declare const consoleLightInit: (options?: Partial<CreateThemeOptions>) => import('@codemirror/state').Extension;
export declare const consoleLight: import('@codemirror/state').Extension;
export declare const defaultSettingsConsoleDark: CreateThemeOptions['settings'];
export declare const consoleDarkInit: (options?: Partial<CreateThemeOptions>) => import('@codemirror/state').Extension;
export declare const consoleDark: import('@codemirror/state').Extension;
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { consoleLight, consoleDark } from '@uiw/codemirror-theme-console';
import { javascript } from '@codemirror/lang-javascript';

function App() {
  return (
    <CodeMirror
      value="INFO:waitress:Serving on http://0.0.0.0:5000"
      height="200px"
      theme={consoleLight}
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
import { consoleLight, consoleDark } from '@uiw/codemirror-theme-console';

const state = EditorState.create({
  doc: 'my source code',
  extensions: [consoleDark],
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
