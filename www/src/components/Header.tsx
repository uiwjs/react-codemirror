import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from '../logo.png';
import { NavMenus } from './NavMenus';

export const Warpper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderWarpper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 42px;
  padding-left: 10px;
  padding-right: 10px;
  border-bottom: 1px solid var(--color-border-default);
  position: sticky;
  top: 0;
  z-index: 9999;
  background-color: var(--color-canvas-subtle);
`;

const Title = styled(NavLink)`
  font-size: 14px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--color-fg-muted);
  > img {
    height: 21px;
  }
`;

export const Header = () => {
  return (
    <HeaderWarpper>
      <Title to="/">
        <img src={logo} alt="Logo" />
        <span>CodeMirror Theme</span>
      </Title>
      <NavMenus />
    </HeaderWarpper>
  );
};
