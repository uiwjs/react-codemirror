import styled from 'styled-components';
import { Link, Outlet } from 'react-router-dom';
import '@wcj/dark-mode';

const Warpper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const Tools = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
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

export function ThemeLayout() {
  return (
    <Warpper>
      <Header>
        <Title>CodeMirror Theme Editor</Title>
        <Tools>
          <Link to="/">Home</Link>
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
