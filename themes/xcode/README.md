<!--rehype:ignore:start-->

# Xcode Theme

<!--rehype:ignore:end-->

[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-xcode.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-xcode)

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/xcode/dark">
  <img width="436" alt="codemirror-theme-xcode dark" src="https://user-images.githubusercontent.com/1680273/206087681-537b9c1f-0dce-42a4-854d-036147935e82.png">
</a>

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/xcode/light">
  <img width="436" alt="codemirror-theme-xcode light" src="https://user-images.githubusercontent.com/1680273/206087526-9613a546-f129-4e01-9263-5a75f3f039a7.png">
</a>

## Install

```bash
npm install @uiw/codemirror-theme-xcode --save
```

```jsx
import { xcodeLight, xcodeLightInit, xcodeDark, xcodeDarkInit } from '@uiw/codemirror-theme-xcode';

<CodeMirror theme={xcodeLight} />
<CodeMirror
  theme={xcodeLightInit({
    settings: {
      caret: '#c6c6c6',
      fontFamily: 'monospace',
    }
  })}
/>
```

## API

```ts
import { CreateThemeOptions } from '@uiw/codemirror-themes';
export declare const defaultSettingsXcodeLight: CreateThemeOptions['settings'];
export declare function xcodeLightInit(options?: Partial<CreateThemeOptions>): import('@codemirror/state').Extension;
export declare const xcodeLight: import('@codemirror/state').Extension;
export declare const defaultSettingsXcodeDark: CreateThemeOptions['settings'];
export declare const xcodeDarkInit: (options?: Partial<CreateThemeOptions>) => import('@codemirror/state').Extension;
export declare const xcodeDark: import('@codemirror/state').Extension;
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { xcodeLight, xcodeDark } from '@uiw/codemirror-theme-xcode';
import { javascript } from '@codemirror/lang-javascript';

function App() {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      theme={xcodeLight}
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
import { xcodeLight, xcodeDark } from '@uiw/codemirror-theme-xcode';

const state = EditorState.create({
  doc: 'my source code',
  extensions: [xcodeDark, javascript({ jsx: true })],
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

Made with [action-contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.
