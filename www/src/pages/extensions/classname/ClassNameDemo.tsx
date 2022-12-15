import data from '@uiw/codemirror-extensions-classname/README.md';
import { classname } from '@uiw/codemirror-extensions-classname';
import CodeMirror from '@uiw/react-codemirror';
import { langs } from '@uiw/codemirror-extensions-langs';
import { EditorView } from '@codemirror/view';
import { useTheme } from '../../../utils/useTheme';

export const ClassNameDemo = () => {
  const theme = useTheme();

  const themeDemo = EditorView.baseTheme({
    '&dark .first-line': { backgroundColor: 'red' },
    '&light .first-line': { backgroundColor: 'red' },
    '&dark .line-color': { backgroundColor: 'blue' },
    '&light .line-color': { backgroundColor: 'blue' },
  });

  return (
    <CodeMirror
      value={data.source}
      theme={theme}
      height="300px"
      style={{ margin: '0 0 23px 0' }}
      extensions={[
        langs.markdown(),
        themeDemo,
        classname({
          add: (lineNumber) => {
            if (lineNumber === 3) {
              return 'first-line';
            }
            if (lineNumber === 5) {
              return 'line-color';
            }
          },
        }),
      ]}
    />
  );
};
