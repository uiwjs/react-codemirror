import CodeMirror from '@uiw/react-codemirror';
import { langs } from '@uiw/codemirror-extensions-langs';
import { Fragment } from 'react';

/**
 * https://github.com/uiwjs/react-codemirror/issues/431
 */
export const PageExample431 = () => {
  return (
    <Fragment>
      <h1>How to remove all syntax highlighting?</h1>
      <CodeMirror
        value={`console.log('hello')`}
        theme="none"
        height="400px"
        style={{ margin: '0 0 23px 0' }}
        extensions={[langs.markdown()]}
      />
    </Fragment>
  );
};
