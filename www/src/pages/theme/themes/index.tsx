import { Fragment } from 'react';
import styled from 'styled-components';
import { useParams, NavLink } from 'react-router-dom';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { eclipse } from '@uiw/codemirror-theme-eclipse';
import { bespin } from '@uiw/codemirror-theme-bespin';
import { duotoneLight, duotoneDark } from '@uiw/codemirror-theme-duotone';
import { Document, toSnakeCase } from './Document';
import { Sample } from './Sample';
import { Sider } from '../editor';

const MenuItem = styled(NavLink)`
  cursor: pointer;
  padding: 6px 8px;
  font-size: 16px;
  text-decoration: none;
  text-transform: capitalize;
  border-radius: 2px;
  transition: background-color 0.3s;
  color: var(--color-accent-emphasis);
  &.active {
    background-color: var(--color-neutral-muted);
    color: var(--color-theme-text);
  }
  &:hover {
    background-color: var(--color-neutral-muted);
  }
`;

const themeData = {
  bespin,
  dracula,
  duotoneLight,
  duotoneDark,
  eclipse,
  okaidia,
};

export const ThemeOkaidia = () => {
  const { name = '', lightOrDark = '' } = useParams();
  const text = name + lightOrDark.replace(lightOrDark[0], (lightOrDark[0] || '').toLocaleUpperCase());
  const theme = themeData[text as keyof typeof themeData];
  return (
    <Fragment>
      <Sider>
        {Object.keys(themeData).map((name, key) => {
          const [_name, _theme] = toSnakeCase(name) || [];
          return (
            <MenuItem key={key} to={`/theme/data/${_name}${_theme ? `/${_theme}` : ''}`}>
              {_name} {_theme}
            </MenuItem>
          );
        })}
      </Sider>
      <Document themeName={text}>
        <Sample theme={theme} />
      </Document>
    </Fragment>
  );
};
