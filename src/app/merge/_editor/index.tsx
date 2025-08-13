'use client';

import React, { useState } from 'react';
import CodeMirrorMerge from 'react-codemirror-merge';
import { abyss } from '@uiw/codemirror-theme-abyss';

const Original = CodeMirrorMerge.Original;
const Modified = CodeMirrorMerge.Modified;
let doc = `one
two
three
four
five`;

export default function Editor() {
  const [value, setValue] = useState(doc);
  const [valueModified, setValueModified] = useState(doc.replace(/t/g, 'T') + 'Six');
  return (
    <div>
      <CodeMirrorMerge theme={abyss}>
        <Original
          value={value}
          onChange={(value) => {
            setValue(value);
          }}
        />
        <Modified
          value={valueModified}
          onChange={(value) => {
            setValueModified(value);
          }}
        />
      </CodeMirrorMerge>
      <div style={{ display: 'flex', marginTop: 10 }}>
        <pre style={{ flex: 1 }}>{value} </pre>
        <pre style={{ flex: 1 }}>{valueModified} </pre>
      </div>
    </div>
  );
}
