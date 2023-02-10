<!--rehype:ignore:start-->

# TokyoNight Theme

<!--rehype:ignore:end-->

[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-tokyo-night.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-tokyo-night)

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/tokyo-night">
  <img width="436" alt="codemirror-theme-tokyo-night" src="https://user-images.githubusercontent.com/1680273/206094521-c3a51de1-8cb7-4f01-a9bd-6cfd04a3aa0d.png">
</a>

## Install

```bash
npm install @uiw/codemirror-theme-tokyo-night --save
```

```jsx
import { tags as t } from '@lezer/highlight';
import { tokyoNight, tokyoNightInit } from '@uiw/codemirror-theme-tokyo-night';

<CodeMirror theme={tokyoNight} />
<CodeMirror
  theme={tokyoNightInit({
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
export declare const defaultSettingsTokyoNight: CreateThemeOptions['settings'];
export declare const tokyoNightInit: (options?: Partial<CreateThemeOptions>) => import('@codemirror/state').Extension;
export declare const tokyoNight: import('@codemirror/state').Extension;
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night';
import { javascript } from '@codemirror/lang-javascript';

function App() {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      theme={tokyoNight}
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
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night';

const state = EditorState.create({
  doc: 'my source code',
  extensions: [tokyoNight, javascript({ jsx: true })],
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
