<!--rehype:ignore:start-->

# Mentions Extensions

<!--rehype:ignore:end-->

[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-extensions-mentions.svg)](https://www.npmjs.com/package/@uiw/codemirror-extensions-mentions)

Mentions Extensions for CodeMirror6.

[![Mentions Extensions](https://user-images.githubusercontent.com/1680273/183007711-68109ca3-7140-411e-a747-53bcca0fa4c7.png)](https://uiwjs.github.io/react-codemirror/#/extensions/mentions)

## Install

```bash
npm install @uiw/codemirror-extensions-mentions --save
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { mentions } from '@uiw/codemirror-extensions-mentions';

const users = [
  { label: '@Walter White' },
  { label: '@皮皮鲁' },
  { label: '@鲁西西' },
  { label: '@中本聪' },
  { label: '@サトシ・ナカモト' },
  { label: '@野比のび太' },
  { label: '@성덕선' },
];

function App() {
  return <CodeMirror value="" height="200px" extensions={[mentions(users)]} />;
}
export default App;
```

```js
import { EditorView } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { mentions } from '@uiw/codemirror-extensions-mentions';

const users = [
  { label: '@Walter White' },
  { label: '@皮皮鲁' },
  { label: '@鲁西西' },
  { label: '@中本聪' },
  { label: '@サトシ・ナカモト' },
  { label: '@野比のび太' },
  { label: '@성덕선' },
];

const state = EditorState.create({
  doc: 'my source code',
  extensions: [mentions(users)],
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
