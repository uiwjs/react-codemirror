<!--rehype:ignore:start-->

# Events Extensions

<!--rehype:ignore:end-->

[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-extensions-events.svg)](https://www.npmjs.com/package/@uiw/codemirror-extensions-events)

Events Extensions for CodeMirror6.

## Install

```bash
npm install @uiw/codemirror-extensions-events --save
```

```js
import * as events from '@uiw/codemirror-extensions-events';

const extension1 = events.scroll({
  scroll: (evn) => {
    console.log(evn.target.scrollTop);
  },
});

const extension2 = events.content({
  focus: (evn) => {
    console.log('focus');
  },
  blur: (evn) => {
    console.log('blur');
  },
});
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { events } from '@uiw/codemirror-extensions-events';

function App() {
  const [scrollTop, setScrollTop] = useState(0);

  const eventExt = events.scroll({
    scroll: (evn) => {
      setScrollTop(evn.target.scrollTop);
    },
  });

  const eventExt2 = events.content({
    focus: (evn) => {
      console.log('focus');
    },
    blur: (evn) => {
      console.log('blur');
    },
  });

  return <CodeMirror value="console.log('hello world!');" height="200px" extensions={[eventExt, eventExt2]} />;
}
export default App;
```

```js
import { EditorView } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { events } from '@uiw/codemirror-extensions-events';

const eventExt = events.content({
  focus: (evn) => {
    console.log('focus');
  },
  blur: (evn) => {
    console.log('blur');
  },
});

const state = EditorState.create({
  doc: 'my source code',
  extensions: [eventExt],
});

const view = new EditorView({
  parent: document.querySelector('#editor'),
  state,
});
```

## API

```ts
import { ViewPlugin, EditorView } from '@codemirror/view';
export declare type Events<K extends keyof HTMLElementEventMap> = Record<
  K,
  (this: HTMLElement, event: HTMLElementEventMap[K]) => void
>;
/**
 * The DOM element that can be styled to scroll.
 * (Note that it may not have been, so you can't assume this is scrollable.)
 */
export declare function dom<T extends keyof HTMLElementEventMap>(
  opts: Events<T>,
): ViewPlugin<{
  dom?: HTMLElement | undefined;
  view: EditorView;
  destroy(): void;
}>;
/**
 * The DOM element that wraps the entire editor view.
 */
export declare function scroll<T extends keyof HTMLElementEventMap>(
  opts: Events<T>,
): ViewPlugin<{
  dom?: HTMLElement | undefined;
  view: EditorView;
  destroy(): void;
}>;
/**
 * The editable DOM element holding the editor content.
 * You should not, usually, interact with this content directly though the DOM,
 * since the editor will immediately undo most of the changes you make.
 */
export declare function content<T extends keyof HTMLElementEventMap>(
  opts: Events<T>,
): ViewPlugin<{
  dom?: HTMLElement | undefined;
  view: EditorView;
  destroy(): void;
}>;
```

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/uiwjs/react-codemirror/graphs/contributors">
  <img src="https://uiwjs.github.io/react-codemirror/CONTRIBUTORS.svg" />
</a>

Made with [github-action-contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.
