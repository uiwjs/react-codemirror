import MarkdownPreview from '@uiw/react-markdown-preview';
import data from '@uiw/codemirror-extensions-zebra-stripes/README.md';
import { zebraStripes } from '@uiw/codemirror-extensions-zebra-stripes';
import CodeMirror, { ReactCodeMirrorProps } from '@uiw/react-codemirror';
import { useEffect, useState } from 'react';
import { langs } from '@uiw/codemirror-extensions-langs';
import styled from 'styled-components';
import { PageWarpper } from '../';
import { LineNumberDemo } from './LineNumberDemo';

const OptionsView = styled.div`
  padding-bottom: 24px;
  display: flex;
  gap: 18px;
`;

export const ZebraStripesDoc = () => {
  const dark = document.documentElement.getAttribute('data-color-mode');
  const [theme, setTheme] = useState<ReactCodeMirrorProps['theme']>(dark === 'dark' ? 'dark' : 'light');
  useEffect(() => {
    setTheme(document.documentElement.getAttribute('data-color-mode') === 'dark' ? 'dark' : 'light');
    document.addEventListener('colorschemechange', (e) => {
      setTheme(e.detail.colorScheme as ReactCodeMirrorProps['theme']);
    });
  }, []);

  const [step, setStep] = useState(2);

  const zebra = zebraStripes({ step: step });
  return (
    <PageWarpper>
      <CodeMirror
        value={data.source}
        theme={theme}
        height="300px"
        style={{ margin: '0 0 23px 0' }}
        extensions={[langs.markdown(), zebra]}
      />
      <OptionsView>
        <select value={step} onChange={(evn) => setStep(Number(evn.target.value))}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
        </select>
      </OptionsView>
      <LineNumberDemo />
      <MarkdownPreview source={data.source} />
    </PageWarpper>
  );
};
