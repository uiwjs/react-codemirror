import CodeMirror, { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import { langs } from '@uiw/codemirror-extensions-langs';
import { useRef } from 'react';

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
        value={`console.log('hello')`}
        theme="none"
        ref={refCallack}
        height="400px"
        width="100%"
        style={{ margin: '0 0 23px 0', flex: 1 }}
        extensions={[langs.markdown()]}
      />
    </div>
  );
}

Component.displayName = 'PageExampleRef';
