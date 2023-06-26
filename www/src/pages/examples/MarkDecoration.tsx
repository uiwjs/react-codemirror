import CodeMirror, { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import { useRef } from 'react';

import { Decoration, drawSelection, EditorView, lineNumbers, ViewPlugin, WidgetType } from '@codemirror/view';

class SimpleWidget extends WidgetType {
  toDOM() {
    const element = document.createElement('span');
    element.className = 'filler';
    return element;
  }
}

const extensions = [
  lineNumbers(),
  drawSelection(),
  ViewPlugin.define(
    () => {
      return {
        decorations: Decoration.set([
          Decoration.widget({
            widget: new SimpleWidget(),
            side: 1, // is after the cursor
          }).range(34),

          Decoration.mark({
            class: 'wrapper',
          }).range(60, 70),

          Decoration.widget({
            widget: new SimpleWidget(),
            side: 1, // should be after the cursor
          }).range(67),
        ]),
      };
    },
    {
      decorations: (value) => value.decorations,
    },
  ),
  EditorView.baseTheme({
    '.filler': {
      display: 'inline-block',
      width: '8px',
      height: '1em',
      backgroundColor: '#9c9',
    },
    '.wrapper': {
      border: '1px solid #aaa',
    },
  }),
];

const code = `The cursor is before this widget:

The cursor is after this widget
dsddfsdfsdfdf
Is this how it should work?`;

export function Component() {
  let $edit = useRef<ReactCodeMirrorRef | null>(null);
  function refCallack(editor: ReactCodeMirrorRef) {
    if (!$edit.current && editor?.editor && editor?.state && editor?.view) {
      // first time we got ref, similar to useEffect
      console.log(editor); // do something with editor
      $edit.current = editor; // store it
    }
  }
  return (
    <div>
      <CodeMirror
        value={code}
        theme="none"
        ref={refCallack}
        height="400px"
        width="100%"
        style={{ margin: '0 0 23px 0', flex: 1 }}
        extensions={[extensions]}
      />
    </div>
  );
}

Component.displayName = 'HomePage';
