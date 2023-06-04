import { FC, PropsWithChildren, useState } from 'react';
import { Link } from 'react-router-dom';
import CodeMirror, { ReactCodeMirrorProps } from '@uiw/react-codemirror';
import * as themes from '@uiw/codemirror-themes-all';
import { langs } from '@uiw/codemirror-extensions-langs';
import styled from 'styled-components';
import { useTheme } from '../../../utils/useTheme';
import { PageWarpper } from '..';

const ToolsWapper = styled.div`
  padding: 0 0 23px 0;
`;

export const ThemesAllExample: FC<PropsWithChildren<{ source?: string }>> = ({ source }) => {
  const themesData: Record<string, Omit<ReactCodeMirrorProps['theme'], 'dark' | 'light'>> = {};
  Object.keys(themes)
    .filter((item) => typeof themes[item as keyof typeof themes] !== 'function')
    .filter((item) => !/^(defaultSettings)/.test(item as keyof typeof themes))
    .forEach((item) => {
      themesData[item] = themes[item as keyof typeof themes];
    });
  const [selectTheme, setSelectTheme] = useState<keyof typeof themesData>();
  const theme = useTheme();
  const themeCurrent = themesData[selectTheme!] ? themesData[selectTheme!] : theme.theme;
  const changeHandle = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectTheme(ev.target.value as keyof typeof themesData);
  };
  return (
    <PageWarpper>
      <CodeMirror
        value={source}
        theme={themeCurrent as ReactCodeMirrorProps['theme']}
        height="300px"
        style={{ margin: '0 0 23px 0' }}
        extensions={[langs.markdown()]}
      />
      <ToolsWapper>
        Select Theme:
        <select value={selectTheme} onChange={changeHandle}>
          <option>Select Theme</option>
          {Object.keys(themesData).map((keyname, index) => {
            return <option key={index}>{keyname}</option>;
          })}
        </select>
        <br />
        <Link to="/theme/home">All Theme Example</Link>
      </ToolsWapper>
    </PageWarpper>
  );
};
