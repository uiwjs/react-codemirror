import { FC, PropsWithChildren, useContext } from 'react';
import { classname } from '@uiw/codemirror-extensions-classname';
import CodeMirror from '@uiw/react-codemirror';
import { langs } from '@uiw/codemirror-extensions-langs';
import { EditorView } from '@codemirror/view';
import { Preview, MdContext } from '../../theme/Preview';
import { useTheme } from '../../../utils/useTheme';
import { PageWarpper } from '..';

export const ClassNameExample: FC<PropsWithChildren> = () => {
  const { theme } = useTheme();
  const mdData = useContext(MdContext);

  const themeDemo = EditorView.baseTheme({
    '&dark .first-line': { backgroundColor: 'red' },
    '&light .first-line': { backgroundColor: 'red' },
    '&dark .line-color': { backgroundColor: 'blue' },
    '&light .line-color': { backgroundColor: 'blue' },
  });

  return (
    <PageWarpper>
      <CodeMirror
        value={mdData.mdstr}
        theme={theme}
        height="300px !important"
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
    </PageWarpper>
  );
};

export const Component = () => {
  return (
    <Preview path={() => import('@uiw/codemirror-extensions-classname/README.md')}>
      <ClassNameExample />
    </Preview>
  );
};
