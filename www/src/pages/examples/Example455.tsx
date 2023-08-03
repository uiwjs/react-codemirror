import CodeMirrorMerge from 'react-codemirror-merge';
import { EditorView } from 'codemirror';
import { EditorState } from '@codemirror/state';
import { androidstudio } from '@uiw/codemirror-theme-androidstudio';

const Original = CodeMirrorMerge.Original;
const Modified = CodeMirrorMerge.Modified;
/**
 * https://github.com/uiwjs/react-codemirror/issues/455
 */
let doc = `one
two
three
four
five`;

export function Component() {
  return (
    <CodeMirrorMerge style={{ width: 540 }} orientation="b-a" theme={androidstudio}>
      <Original value={doc} />
      <Modified
        value={doc.replace(/t/g, 'T') + 'Six'}
        extensions={[EditorView.editable.of(false), EditorState.readOnly.of(true)]}
      />
    </CodeMirrorMerge>
  );
}
