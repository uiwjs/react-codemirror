<!--rehype:ignore:start-->

# Github Theme

<!--rehype:ignore:end-->

[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-github.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-github)

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/github/dark">
  <img width="436" alt="codemirror-theme-github dark" src="https://user-images.githubusercontent.com/1680273/177048035-644af599-aaf1-41d8-86ea-9ea8c3a1a0c5.png">
</a>

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/github/light">
  <img width="436" alt="codemirror-theme-github light" src="https://user-images.githubusercontent.com/1680273/177048005-32794f23-8bff-4059-babf-21316d886e65.png">
</a>

## Install

```bash
npm install @uiw/codemirror-theme-github --save
```

```jsx
import { githubLight, githubLightInit, githubDark, githubDarkInit } from '@uiw/codemirror-theme-github';

<CodeMirror theme={githubLight} />
<CodeMirror
  theme={githubLightInit({
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
export declare const defaultSettingsGithubLight: CreateThemeOptions['settings'];
export declare const githubLightInit: (options?: Partial<CreateThemeOptions>) => import('@codemirror/state').Extension;
export declare const githubLight: import('@codemirror/state').Extension;
export declare const defaultSettingsGithubDark: CreateThemeOptions['settings'];
export declare const githubDarkInit: (options?: Partial<CreateThemeOptions>) => import('@codemirror/state').Extension;
export declare const githubDark: import('@codemirror/state').Extension;
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { githubLight, githubDark } from '@uiw/codemirror-theme-github';
import { javascript } from '@codemirror/lang-javascript';

function App() {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      theme={githubLight}
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
import { githubLight, githubDark } from '@uiw/codemirror-theme-github';

const state = EditorState.create({
  doc: 'my source code',
  extensions: [githubDark, javascript({ jsx: true })],
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
