import CodeMirror, { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import { langs } from '@uiw/codemirror-extensions-langs';
import { useEffect, useRef } from 'react';

export function Component() {
  const $edit = useRef<ReactCodeMirrorRef>(null);
  useEffect(() => {
    console.log('$edit:', $edit);
    setTimeout(() => {
      console.log('$edit:view:', $edit.current?.view);
      console.log('$edit:state:', $edit.current?.state);
    }, 300);
    console.log('$edit:', $edit.current?.view);
  }, [$edit]);
  return (
    <div>
      <CodeMirror
        value={`console.log('hello')`}
        theme="none"
        ref={$edit}
        height="400px"
        width="100%"
        style={{ margin: '0 0 23px 0', flex: 1 }}
        extensions={[langs.markdown()]}
      />
    </div>
  );
}

Component.displayName = 'HomePage';
