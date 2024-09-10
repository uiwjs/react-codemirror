import { Fragment, useRef, useState } from 'react';
import { ViewPlugin, ViewUpdate } from '@codemirror/view';
import { StateEffect } from '@codemirror/state';
import CodeMirrorMerge, { type CodeMirrorMergeRef } from 'react-codemirror-merge';

const Original = CodeMirrorMerge.Original;
const Modified = CodeMirrorMerge.Modified;
let doc = `one
two
three
four
five`;

const log1UpdatePlugin = ViewPlugin.fromClass(
  class {
    update(update: ViewUpdate) {
      if (update.docChanged) {
        console.log('Document changed! test 1');
      }
    }
  },
);

const log2UpdatePlugin = ViewPlugin.fromClass(
  class {
    update(update: ViewUpdate) {
      if (update.docChanged) {
        console.log('Document changed! test 2');
      }
    }
  },
);

/**
 * https://github.com/uiwjs/react-codemirror/issues/681#issuecomment-2341521112
 */
export function Component() {
  return (
    <Fragment>
      <Example />
    </Fragment>
  );
}

function Example() {
  const [value, setValue] = useState(doc);
  const [valueModified, setValueModified] = useState(doc);
  const $ref = useRef<CodeMirrorMergeRef>(null);
  const handle1 = () => {
    $ref.current?.view?.a.dispatch({
      effects: StateEffect.appendConfig.of([log2UpdatePlugin]),
    });
  };
  return (
    <div style={{ width: '100%' }}>
      <div>
        <button onClick={handle1}>Add extension 2</button>
      </div>
      <CodeMirrorMerge ref={$ref} destroyRerender={false}>
        <Original
          value={value}
          extensions={[log1UpdatePlugin]}
          onChange={(val) => {
            setValue(val);
          }}
        />
        <Modified
          value={valueModified}
          onChange={(val) => {
            setValueModified(val);
          }}
        />
      </CodeMirrorMerge>
      <div style={{ display: 'flex', marginTop: 10 }}>
        <pre style={{ flex: 1 }}>{value} </pre>
        <pre style={{ backgroundColor: '#fff', flex: 1 }}>{valueModified} </pre>
      </div>
    </div>
  );
}
