<!--rehype:ignore:start-->

# BBEdit Theme

<!--rehype:ignore:end-->

[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-aura.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-aura)

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/aura">
  <img width="436" alt="codemirror-theme-aura" src="https://user-images.githubusercontent.com/1680273/206092773-8140fc6b-119f-4271-a821-7dc6bcbc1c63.png">
</a>

## Install

```bash
npm install @uiw/codemirror-theme-aura --save
```

```jsx
import { tags as t } from '@lezer/highlight';
import { aura, auraInit } from '@uiw/codemirror-theme-aura';

<CodeMirror theme={aura} />
<CodeMirror
  theme={auraInit({
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
export declare const defaultSettingsAura: CreateThemeOptions['settings'];
export declare const auraInit: (options?: Partial<CreateThemeOptions>) => import('@codemirror/state').Extension;
export declare const aura: import('@codemirror/state').Extension;
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { aura } from '@uiw/codemirror-theme-aura';
import { javascript } from '@codemirror/lang-javascript';

function App() {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      theme={aura}
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
import { aura } from '@uiw/codemirror-theme-aura';

const state = EditorState.create({
  doc: 'my source code',
  extensions: [aura, javascript({ jsx: true })],
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
