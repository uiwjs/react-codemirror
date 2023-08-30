import { FC, PropsWithChildren } from 'react';
import { Preview } from '../../theme/Preview';
import { zebraStripes } from '@uiw/codemirror-extensions-zebra-stripes';
import CodeMirror from '@uiw/react-codemirror';
import { useState } from 'react';
import { langs } from '@uiw/codemirror-extensions-langs';
import styled from 'styled-components';
import { PageWarpper } from '../';
import { useTheme } from '../../../utils/useTheme';

const OptionsView = styled.div`
  padding-bottom: 24px;
  display: flex;
  gap: 18px;
`;

export const ZebraStripesExample: FC<PropsWithChildren<{ source?: string }>> = ({ source }) => {
  const { theme } = useTheme();
  const [step, setStep] = useState(2);
  const zebra = zebraStripes({ step: step });
  return (
    <PageWarpper>
      <CodeMirror
        value={source}
        theme={theme}
        height="300px !important"
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
      <CodeMirror
        value={source}
        theme={theme}
        height="300px !important"
        style={{ margin: '0 0 23px 0' }}
        extensions={[
          langs.markdown(),
          zebraStripes({ lineNumber: [1, [3, 6], 10], lightColor: '#aca2ff33', darkColor: '#aca2ff40' }),
        ]}
      />
    </PageWarpper>
  );
};

export const Component = () => {
  return (
    <Preview path={() => import('@uiw/codemirror-extensions-zebra-stripes/README.md')}>
      <ZebraStripesExample />
    </Preview>
  );
};
