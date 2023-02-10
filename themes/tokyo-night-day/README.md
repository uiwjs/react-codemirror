<!--rehype:ignore:start-->

# TokyoNightDay Theme

<!--rehype:ignore:end-->

[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-tokyo-night-day.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-tokyo-night-day)

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/tokyo-night-day">
  <img width="436" alt="codemirror-theme-tokyo-night-day" src="https://user-images.githubusercontent.com/1680273/206104544-ca4db2e0-caac-4804-9321-c269fe660245.png">
</a>

## Install

```bash
npm install @uiw/codemirror-theme-tokyo-night-day --save
```

```jsx
import { tags as t } from '@lezer/highlight';
import { tokyoNightDay, tokyoNightDayInit } from '@uiw/codemirror-theme-tokyo-night-day';

<CodeMirror theme={tokyoNightDay} />
<CodeMirror
  theme={tokyoNightDayInit({
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
export declare const defaultSettingsTokyoNightDay: CreateThemeOptions['settings'];
export declare const tokyoNightDayInit: (
  options?: Partial<CreateThemeOptions>,
) => import('@codemirror/state').Extension;
export declare const tokyoNightDay: import('@codemirror/state').Extension;
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { tokyoNightDay } from '@uiw/codemirror-theme-tokyo-night-day';
import { javascript } from '@codemirror/lang-javascript';

function App() {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      theme={tokyoNightDay}
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
import { tokyoNightDay } from '@uiw/codemirror-theme-tokyo-night-day';

const state = EditorState.create({
  doc: 'my source code',
  extensions: [tokyoNightDay, javascript({ jsx: true })],
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
