# onChange Example

```jsx mdx:preview
import React, { useState } from 'react';
import CodeMirrorMerge from 'react-codemirror-merge';

const Original = CodeMirrorMerge.Original;
const Modified = CodeMirrorMerge.Modified;
let doc = `one
two
three
four
five`;

export default function App() {
  const [value, setValue] = useState('');
  const [valueModified, setValueModified] = useState('');
  return (
    <div>
      <CodeMirrorMerge>
        <Original
          onChange={(value) => {
            setValue(value);
          }}
          value={doc}
        />
        <Modified
          onChange={(value) => {
            setValueModified(value);
          }}
          value={doc.replace(/t/g, 'T') + 'Six'}
        />
      </CodeMirrorMerge>
      <div style={{ display: 'flex', marginTop: 10 }}>
        <pre style={{ flex: 1 }}>{value} </pre>
        <pre style={{ backgroundColor: '#fff', flex: 1 }}>{valueModified} </pre>
      </div>
    </div>
  );
}
```
