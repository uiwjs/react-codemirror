import { color } from '@uiw/codemirror-extensions-color';
import CodeMirror, { ReactCodeMirrorProps } from '@uiw/react-codemirror';
import { useState } from 'react';
import { langs } from '@uiw/codemirror-extensions-langs';
import { useTheme } from '../../../utils/useTheme';
import { codeSample } from './code';
import { PageWarpper } from '..';

export const ColorExample = () => {
  const [modeType, setModeType] = useState<'readOnly' | 'editable'>('readOnly');
  const [readOnly, setReadOnly] = useState(false);
  const { theme } = useTheme();
  const porps: ReactCodeMirrorProps = {};
  if (modeType === 'editable') {
    porps.editable = readOnly;
  }
  if (modeType === 'readOnly') {
    porps.readOnly = readOnly;
  }

  return (
    <PageWarpper>
      <CodeMirror
        value={codeSample}
        theme={theme}
        height="400px !important"
        // editable={readOnly}
        // readOnly={readOnly}
        {...porps}
        style={{ margin: '0 0 23px 0' }}
        extensions={[langs.css(), color]}
      />
      <div style={{ marginBottom: 23 }}>
        <button type="button" onClick={() => setReadOnly(!readOnly)}>
          编辑器 & {String(readOnly)}
        </button>
        <label>
          <input
            type="radio"
            name="mode"
            checked={modeType === 'readOnly'}
            value="readOnly"
            onChange={({ target }) => setModeType(target.value as any)}
          />{' '}
          readOnly
        </label>
        <label>
          <input
            type="radio"
            name="mode"
            checked={modeType === 'editable'}
            value="editable"
            onChange={({ target }) => setModeType(target.value as any)}
          />{' '}
          editable
        </label>
      </div>
    </PageWarpper>
  );
};
