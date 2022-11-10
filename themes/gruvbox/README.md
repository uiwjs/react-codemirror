<!--rehype:ignore:start-->

# Gruvbox Dark Theme

<!--rehype:ignore:end-->

<!-- [![npm version]()]() -->

<!-- <a href=""> -->
<!--   <img width="436" alt="codemirror-theme-gruvbox-dark" src=""> -->
<!-- </a> -->

## Install

```bash
npm install @uiw/codemirror-theme-gruvbox-dark --save
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror'
import { gruvboxDark } from '@uiw/codemirror-theme-gruvbox-dark'
import { javascript } from '@codemirror/lang-javascript'

function App() {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height='200px'
      theme={gruvboxDark}
      extensions={[javascript({ jsx: true })]}
    />
  )
}
export default App
```

```js
import { EditorView } from '@codemirror/view'
import { EditorState } from '@codemirror/state'
import { javascript } from '@codemirror/lang-javascript'
import { gruvboxDark } from '@uiw/codemirror-theme-gruvbox-dark'

const state = EditorState.create({
  doc: 'my source code',
  extensions: [gruvboxDark, javascript({ jsx: true })],
})

const view = new EditorView({
  parent: document.querySelector('#editor'),
  state,
})
```

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/uiwjs/react-codemirror/graphs/contributors">
  <img src="https://uiwjs.github.io/react-codemirror/CONTRIBUTORS.svg" />
</a>

Made with [github-action-contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.
