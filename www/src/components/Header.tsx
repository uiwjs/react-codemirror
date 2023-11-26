import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from '../logo.png';
import { NavMenus } from './NavMenus';
import { FC, PropsWithChildren } from 'react';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
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
  a.sponsor {
    color: var(--color-danger-fg);
    text-decoration: none;
  }
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

export const Header: FC<PropsWithChildren> = ({ children }) => {
  return (
    <HeaderWrapper>
      <Title to="/">
        <img src={logo} alt="Logo" />
        <span>React CodeMirror</span>
      </Title>
      <NavMenus>{children}</NavMenus>
    </HeaderWrapper>
  );
};
