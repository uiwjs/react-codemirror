import CodeMirror from '@uiw/react-codemirror';
import { langs } from '@uiw/codemirror-extensions-langs';
import { Fragment } from 'react';

/**
 * https://github.com/uiwjs/react-codemirror/issues/431
 */
export const PageExample431 = () => {
  return (
    <Fragment>
      <CodeMirror
        value={`console.log('hello')`}
        theme="none"
        height="400px"
        width="100%"
        style={{ margin: '0 0 23px 0', flex: 1 }}
        extensions={[langs.markdown()]}
      />
    </Fragment>
  );
};
