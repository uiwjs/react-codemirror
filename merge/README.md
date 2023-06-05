<!--rehype:ignore:start-->

# react-codemirror-merge

<!--rehype:ignore:end-->

[![npm version](https://img.shields.io/npm/v/react-codemirror-merge.svg)](https://www.npmjs.com/package/react-codemirror-merge)

CodeMirror merge view for React.

<a href="https://uiwjs.github.io/react-codemirror/#/merge/document">
  <img width="436" alt="codemirror-theme-androidstudio" src="https://user-images.githubusercontent.com/1680273/230655848-821b9390-9bed-4f28-b52e-f96b59228bfa.png">
</a>

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
    <CodeMirrorMerge orientation="b-a">
      <Original value={doc} />
      <Modified
        value={doc.replace(/t/g, 'T') + 'Six'}
        extensions={[EditorView.editable.of(false), EditorState.readOnly.of(true)]}
      />
    </CodeMirrorMerge>
  );
};
```

## Theme

```jsx
import { useState } from 'react';
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
  const [theme, setTheme] = useState('light');
  return (
    <CodeMirrorMerge orientation="b-a" theme={theme}>
      <Original value={doc} />
      <Modified
        value={doc.replace(/t/g, 'T') + 'Six'}
        extensions={[EditorView.editable.of(false), EditorState.readOnly.of(true)]}
      />
    </CodeMirrorMerge>
  );
};
```

## Props

```ts
import { Extension } from '@codemirror/state';
export interface CodeMirrorMergeRef extends InternalRef {}
export interface CodeMirrorMergeProps extends React.HTMLAttributes<HTMLDivElement>, MergeConfig {
  theme?: 'light' | 'dark' | 'none' | Extension;
}

interface MergeConfig {
  /**
  Controls whether editor A or editor B is shown first. Defaults
  to `"a-b"`.
  */
  orientation?: 'a-b' | 'b-a';
  /**
  Controls whether revert controls are shown between changed
  chunks.
  */
  revertControls?: 'a-to-b' | 'b-to-a';
  /**
  When given, this function is called to render the button to
  revert a chunk.
  */
  renderRevertControl?: () => HTMLElement;
  /**
  By default, the merge view will mark inserted and deleted text
  in changed chunks. Set this to false to turn that off.
  */
  highlightChanges?: boolean;
  /**
  Controls whether a gutter marker is shown next to changed lines.
  */
  gutter?: boolean;
  /**
  When given, long stretches of unchanged text are collapsed.
  `margin` gives the number of lines to leave visible after/before
  a change (default is 3), and `minSize` gives the minimum amount
  of collapsible lines that need to be present (defaults to 4).
  */
  collapseUnchanged?: {
    margin?: number;
    minSize?: number;
  };
}
```

## Modified Props

```ts
interface ModifiedProps extends Omit<DefaultExtensionsOptions, 'theme'> {
  /**
  The initial document. Defaults to an empty document. Can be
  provided either as a plain string (which will be split into
  lines according to the value of the [`lineSeparator`
  facet](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator)), or an instance of
  the [`Text`](https://codemirror.net/6/docs/ref/#state.Text) class (which is what the state will use
  to represent the document).
  */
  value?: string | Text;
  /**
  The starting selection. Defaults to a cursor at the very start
  of the document.
  */
  selection?:
    | EditorSelection
    | {
        anchor: number;
        head?: number;
      };
  /**
  [Extension(s)](https://codemirror.net/6/docs/ref/#state.Extension) to associate with this state.
  */
  extensions?: Extension;
  /** Fired whenever a change occurs to the document. */
  onChange?(value: string, viewUpdate: ViewUpdate): void;
}

import { Extension } from '@codemirror/state';
import { BasicSetupOptions } from '@uiw/codemirror-extensions-basic-setup';
import { DefaultExtensionsOptions } from '@uiw/react-codemirror';

export interface DefaultExtensionsOptions {
  indentWithTab?: boolean;
  basicSetup?: boolean | BasicSetupOptions;
  placeholder?: string | HTMLElement;
  theme?: 'light' | 'dark' | 'none' | Extension;
  readOnly?: boolean;
  editable?: boolean;
}
```

## Original Props

```ts
interface OriginalProps extends Omit<DefaultExtensionsOptions, 'theme'> {
  /**
  The initial document. Defaults to an empty document. Can be
  provided either as a plain string (which will be split into
  lines according to the value of the [`lineSeparator`
  facet](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator)), or an instance of
  the [`Text`](https://codemirror.net/6/docs/ref/#state.Text) class (which is what the state will use
  to represent the document).
  */
  value?: string | Text;
  /**
  The starting selection. Defaults to a cursor at the very start
  of the document.
  */
  selection?:
    | EditorSelection
    | {
        anchor: number;
        head?: number;
      };
  /**
  [Extension(s)](https://codemirror.net/6/docs/ref/#state.Extension) to associate with this state.
  */
  extensions?: Extension;
  /** Fired whenever a change occurs to the document. */
  onChange?(value: string, viewUpdate: ViewUpdate): void;
}

import { Extension } from '@codemirror/state';
import { BasicSetupOptions } from '@uiw/codemirror-extensions-basic-setup';
import { DefaultExtensionsOptions } from '@uiw/react-codemirror';

export interface DefaultExtensionsOptions {
  indentWithTab?: boolean;
  basicSetup?: boolean | BasicSetupOptions;
  placeholder?: string | HTMLElement;
  theme?: 'light' | 'dark' | 'none' | Extension;
  readOnly?: boolean;
  editable?: boolean;
}
```

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/uiwjs/react-codemirror/graphs/contributors">
  <img src="https://uiwjs.github.io/react-codemirror/CONTRIBUTORS.svg" />
</a>

Made with [github-action-contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.
