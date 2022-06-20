import styled from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';
import '@wcj/dark-mode';
import logo from '../../logo.png';

const Warpper = styled.div`
  display: flex;
  flex-direction: column;
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

const Tools = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  & a {
    display: flex;
    align-items: center;
  }
`;

const Content = styled.div`
  display: flex;
  flex: 1;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 42px;
  padding-left: 10px;
  padding-right: 10px;
  border-bottom: 1px solid var(--color-border-default);
`;

const Link = styled(NavLink)`
  padding: 2px 5px;
  border-radius: 3px;
  text-decoration: none;
  &.active {
    background-color: var(--color-fg-subtle);
    color: var(--color-canvas-subtle);
  }
`;

export function ThemeLayout() {
  return (
    <Warpper>
      <Header>
        <Title to="/">
          <img src={logo} alt="Logo" />
          <span>CodeMirror Theme</span>
        </Title>
        <Tools>
          <Link to="/">Home</Link>
          <Link to="/theme/data">Themes</Link>
          <Link to="/theme/editor">Editor</Link>
          <Link to="/theme/doc">Theme Doc</Link>
          <dark-mode permanent />
        </Tools>
      </Header>
      <Content>
        <Outlet />
      </Content>
    </Warpper>
  );
}
