import CodeMirror from '@uiw/react-codemirror';
import { langs } from '@uiw/codemirror-extensions-langs';
import * as events from '@uiw/codemirror-extensions-events';
import { Fragment } from 'react';

/**
 * https://github.com/uiwjs/react-codemirror/issues/650
 */
export function Component() {
  const extension = events.content({
    paste: (event) => {
      event.preventDefault();
    },
  });
  return (
    <Fragment>
      <CodeMirror
        value={`console.log('hello')`}
        theme="none"
        height="400px !important"
        width="100%"
        style={{ margin: '0 0 23px 0', flex: 1 }}
        extensions={[langs.markdown(), extension]}
      />
    </Fragment>
  );
}
