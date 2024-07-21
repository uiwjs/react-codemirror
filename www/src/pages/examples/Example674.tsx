import CodeMirror from '@uiw/react-codemirror';
import { EditorView } from '@uiw/react-codemirror';
import { Fragment, useCallback, useState } from 'react';

const code = `## Title

[weisit ulr](https://uiwjs.github.io/react-codemirror/)
four
**Bold text**
`;

/**
 * https://github.com/uiwjs/react-codemirror/issues/674
 */
export function Component() {
  const [value, setValue] = useState(code);

  const onChange = useCallback((val: string) => {
    setValue(val);
  }, []);

  return (
    <Fragment>
      <CodeMirror
        value={value}
        theme="none"
        height="400px !important"
        width="100%"
        onChange={onChange}
        style={{ margin: '0 0 23px 0', flex: 1 }}
        extensions={[EditorView.contentAttributes.of({ spellcheck: 'true' })]}
      />
    </Fragment>
  );
}
