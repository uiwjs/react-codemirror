import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { toSnakeCase } from './Document';
import { Sider } from '../editor';
import { themeData } from './Datas';

export const MenuItem = styled(NavLink)`
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

export function SiderMenus() {
  return (
    <Sider>
      <MenuItem to={`/theme/`}>Home</MenuItem>
      {Object.keys(themeData).map((name, key) => {
        const [_name, _theme] = toSnakeCase(name) || [];
        return (
          <MenuItem key={key} to={`/theme/data/${_name}${_theme ? `/${_theme}` : ''}`}>
            {_name} {_theme}
          </MenuItem>
        );
      })}
    </Sider>
  );
}
