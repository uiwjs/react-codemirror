import styled from 'styled-components';
import { Extension } from '@codemirror/state';
import { ThmeCodeStyle } from './themeCode';
import { langs } from '../../../langs';
import { useEffect, useState } from 'react';
import { themeCode } from './themeCode';

const Warpper = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  > select {
    padding: 3px 6px;
  }
`;

interface SampleCodeProps {
  styles?: ThmeCodeStyle;
  onChange?: (code: string, lang: string, extension?: Extension) => void;
}

const data = Object.keys(langs);

export const SampleCode = ({ onChange, styles }: SampleCodeProps) => {
  const [lang, setLang] = useState('code');
  const handleChange = (evn: React.ChangeEvent<HTMLSelectElement>) => {
    const langStr = evn.target.value;
    setLang(langStr);
    if (langStr === 'code') {
      onChange && onChange(themeCode(styles), 'code', langs['jsx']());
      return;
    }
    try {
      import(`code-example/txt/sample.${langStr.toLocaleLowerCase()}.txt`)
        .then((data) => {
          const extension = langs[langStr as keyof typeof langs];
          onChange && onChange(data.default as string, langStr, extension ? extension() : undefined);
        })
        .catch((err) => {
          onChange && onChange('', '', undefined);
        });
      if (lang === 'html') {
      }
    } catch (error) {}
  };
  useEffect(() => {
    if (lang === 'code') {
      onChange && onChange(themeCode(styles), 'code', langs['jsx']());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Warpper>
      <select value={lang} onChange={handleChange}>
        <option value="code">Sample Code</option>
        {data.map((val, key) => {
          return (
            <option key={key} value={val}>
              {val}
            </option>
          );
        })}
      </select>
    </Warpper>
  );
};
