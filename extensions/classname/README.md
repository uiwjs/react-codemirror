<!--rehype:ignore:start-->

# Add className Extensions

<!--rehype:ignore:end-->

[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-extensions-classname.svg)](https://www.npmjs.com/package/@uiw/codemirror-extensions-classname)

Adding a class for a specific line for CodeMirror6.

[![Add className Extensions](https://user-images.githubusercontent.com/1680273/224198360-99bd605f-9845-440b-9dfc-f5d4f4d58396.png)](https://uiwjs.github.io/react-codemirror/#/extensions/classname)

## Install

```bash
npm install @uiw/codemirror-extensions-classname --save
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { classname } from '@uiw/codemirror-extensions-classname';

const themeDemo = EditorView.baseTheme({
  '&dark .first-line': { backgroundColor: 'red' },
  '&light .first-line': { backgroundColor: 'red' },
  '&dark .line-color': { backgroundColor: 'blue' },
  '&light .line-color': { backgroundColor: 'blue' },
});

function App() {
  const classnameExt = classname({
    add: (lineNumber) => {
      if (lineNumber === 1) {
        return 'first-line';
      }
      if (lineNumber === 5) {
        return 'line-color';
      }
    },
  });
  return <CodeMirror value="" height="200px" extensions={[theme, classnameExt]} />;
}

export default App;
```

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { classname } from '@uiw/codemirror-extensions-classname';

function App() {
  const classnameExt = classname({
    add: (lineNumber) => {
      if (lineNumber === 1) {
        return 'first-line';
      }
      if (lineNumber === 5) {
        return 'line-color';
      }
    },
  });
  return <CodeMirror value="" height="200px" extensions={[classnameExt]} />;
}
export default App;
```

```js
import { EditorView } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { classname } from '@uiw/codemirror-extensions-classname';

const classnameExt = classname({
  add: (lineNumber) => {
    if (lineNumber === 1) {
      return 'first-line';
    }
    if (lineNumber === 5) {
      return 'line-color';
    }
  },
});

const state = EditorState.create({
  doc: 'my source code',
  extensions: [classnameExt],
});

const view = new EditorView({
  parent: document.querySelector('#editor'),
  state,
});
```

## API

```ts
import { Extension } from '@codemirror/state';
export declare type ClassnameOptions = {
  add?: (lineNumber: number) => string | undefined;
};
export declare function classname(options?: ClassnameOptions): Extension;
```

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/uiwjs/react-codemirror/graphs/contributors">
  <img src="https://uiwjs.github.io/react-codemirror/CONTRIBUTORS.svg" />
</a>

Made with [github-action-contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.
