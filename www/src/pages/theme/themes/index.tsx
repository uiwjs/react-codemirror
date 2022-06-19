import { Fragment } from 'react';
import styled from 'styled-components';
import { useParams, NavLink } from 'react-router-dom';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { duotoneLight, duotoneDark } from '@uiw/codemirror-theme-duotone';
import { Document } from './Document';
import { Sample } from './Sample';
import { Sider } from '../editor';

const Content = styled.div`
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 42px);
  padding: 30px 38px 120px 38px;
`;

const MenuItem = styled(NavLink)`
  cursor: pointer;
  padding: 6px 8px;
  font-size: 16px;
  text-decoration: none;
  text-transform: capitalize;
  &.active {
    background-color: var(--color-border-default);
    border-radius: 2px;
  }
`;

const themeData = {
  okaidia,
  dracula,
  duotoneLight,
  duotoneDark,
};

export const ThemeOkaidia = () => {
  const { name } = useParams();
  const theme = themeData[name as keyof typeof themeData];
  const themeName = name;
  return (
    <Fragment>
      <Sider>
        {Object.keys(themeData).map((name, key) => {
          return (
            <MenuItem key={key} to={`/theme/data/${name}`}>
              {name}
            </MenuItem>
          );
        })}
      </Sider>
      <Content>
        <Document themeName={themeName}>
          <Sample theme={theme} />
        </Document>
      </Content>
    </Fragment>
  );
};
