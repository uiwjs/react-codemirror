import type { FC, PropsWithChildren } from 'react';
import { lineNumbersRelative } from '@uiw/codemirror-extensions-line-numbers-relative';
import CodeMirror from '@uiw/react-codemirror';
import { langs } from '@uiw/codemirror-extensions-langs';
import { Preview } from '../../theme/Preview';
import { useTheme } from '../../../utils/useTheme';
import { PageWarpper } from '..';

export const LineNumbersRelativeExample: FC<PropsWithChildren<{ source?: string }>> = ({ source }) => {
  const { theme } = useTheme();
  return (
    <PageWarpper>
      <CodeMirror
        value={source}
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
