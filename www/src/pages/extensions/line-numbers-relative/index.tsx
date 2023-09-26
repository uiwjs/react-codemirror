import { useContext, type FC, type PropsWithChildren } from 'react';
import { lineNumbersRelative } from '@uiw/codemirror-extensions-line-numbers-relative';
import CodeMirror from '@uiw/react-codemirror';
import { langs } from '@uiw/codemirror-extensions-langs';
import { Preview, MdContext } from '../../theme/Preview';
import { useTheme } from '../../../utils/useTheme';
import { PageWarpper } from '..';

export const LineNumbersRelativeExample: FC<PropsWithChildren> = () => {
  const { theme } = useTheme();
  const mdData = useContext(MdContext);
  return (
    <PageWarpper>
      <CodeMirror
        value={mdData.mdstr}
        theme={theme}
        height="300px !important"
        style={{ margin: '0 0 23px 0' }}
        extensions={[langs.markdown(), lineNumbersRelative]}
      />
    </PageWarpper>
  );
};

export const Component = () => {
  return (
    <Preview path={() => import('@uiw/codemirror-extensions-line-numbers-relative/README.md')}>
      <LineNumbersRelativeExample />
    </Preview>
  );
};
