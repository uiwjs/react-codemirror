<!--rehype:ignore:start-->

# TokyoNightStorm Theme

<!--rehype:ignore:end-->

[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-tokyo-night-storm.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-tokyo-night-storm)

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/tokyo-night-storm">
  <img width="436" alt="codemirror-theme-tokyo-night-storm" src="https://user-images.githubusercontent.com/1680273/206180525-c0e18a13-50ce-4d61-bd21-1bf25e81c3c0.png">
</a>

## Install

```bash
npm install @uiw/codemirror-theme-tokyo-night-storm --save
```

```jsx
import { tags as t } from '@lezer/highlight';
import { tokyoNightStorm, tokyoNightStormInit } from '@uiw/codemirror-theme-tokyo-night-storm';

<CodeMirror theme={tokyoNightStorm} />
<CodeMirror
  theme={tokyoNightStormInit({
    settings: {
      caret: '#c6c6c6',
      fontFamily: 'monospace',
    },
    styles: [
      { tag: t.comment, color: '#6272a4' },
    ]
  })}
/>
```

## API

```tsx
import { CreateThemeOptions } from '@uiw/codemirror-themes';
export declare const defaultSettingsTokyoNightStorm: CreateThemeOptions['settings'];
export declare const tokyoNightStormInit: (
  options?: Partial<CreateThemeOptions>,
) => import('@codemirror/state').Extension;
export declare const tokyoNightStorm: import('@codemirror/state').Extension;
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { tokyoNightStorm } from '@uiw/codemirror-theme-tokyo-night-storm';
import { javascript } from '@codemirror/lang-javascript';

function App() {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      theme={tokyoNightStorm}
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
import { tokyoNightStorm } from '@uiw/codemirror-theme-tokyo-night-storm';

const state = EditorState.create({
  doc: 'my source code',
  extensions: [tokyoNightStorm, javascript({ jsx: true })],
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
