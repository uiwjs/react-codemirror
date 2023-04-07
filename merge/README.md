<!--rehype:ignore:start-->

# react-codemirror-merge

<!--rehype:ignore:end-->

[![npm version](https://img.shields.io/npm/v/react-codemirror-merge.svg)](https://www.npmjs.com/package/react-codemirror-merge)

CodeMirror merge view for React.

## Install

```bash
npm install react-codemirror-merge --save
```

## Usage

```jsx
import CodeMirrorMerge from 'react-codemirror-merge';
import { EditorView } from 'codemirror';
import { EditorState } from '@codemirror/state';

const Original = CodeMirrorMerge.Original;
const Modified = CodeMirrorMerge.Modified;
let doc = `one
two
three
four
five`;

export const Example = () => {
  return (
    <CodeMirrorMerge>
      <Original value={doc} />
      <Modified
        value={doc.replace(/t/g, 'T') + 'Six'}
        extensions={[EditorView.editable.of(false), EditorState.readOnly.of(true)]}
      />
    </CodeMirrorMerge>
  );
};
```

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/uiwjs/react-codemirror/graphs/contributors">
  <img src="https://uiwjs.github.io/react-codemirror/CONTRIBUTORS.svg" />
</a>

Made with [github-action-contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.
