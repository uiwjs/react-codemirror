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
  const [value, setValue] = useState(doc);
  const [valueModified, setValueModified] = useState(doc);
  return (
    <div>
      <CodeMirrorMerge destroyRerender={false}>
        <Original
          onChange={(val) => {
            console.log('~~:1', val);
            setValue(val);
          }}
          value={value}
        />
        <Modified
          onChange={(val) => {
            console.log('~~:2', val);
            setValueModified(val);
          }}
          value={valueModified}
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
