import { hyperLink } from '@uiw/codemirror-extensions-hyper-link';
// import { hyperLinkExtension, hyperLinkStyle } from '@uiw/codemirror-extensions-hyper-link';
import CodeMirror from '@uiw/react-codemirror';
import { langs } from '@uiw/codemirror-extensions-langs';
import { Preview } from '../../theme/Preview';
import { useTheme } from '../../../utils/useTheme';
import { markdownString } from './codeSample';
import { PageWarpper } from '..';

// const hyperLink = [
//   hyperLinkExtension({
//     regexp: /codemirror/gi,
//     match: { codemirror: 'https://google.com' },
//     handle: (value, input, from, to) => {
//       if (value === 'codemirror') return 'https://google.com';
//       return value;
//     },
//   }),
//   hyperLinkStyle,
// ];

export const HyperLinkExample = () => {
  const { theme } = useTheme();
  return (
    <PageWarpper>
      <CodeMirror
        value={markdownString}
        theme={theme}
        height="300px !important"
        style={{ margin: '0 0 23px 0' }}
        extensions={[langs.markdown(), hyperLink]}
      />
    </PageWarpper>
  );
};

export const Component = () => {
  return (
    <Preview path={() => import('@uiw/codemirror-extensions-hyper-link/README.md')}>
      <HyperLinkExample />
    </Preview>
  );
};
