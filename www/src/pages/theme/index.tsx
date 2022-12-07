import styled from 'styled-components';
import { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import '@wcj/dark-mode';
import { Header, Warpper } from '../../components/Header';

export const Content = styled.div`
  display: flex;
  flex: 1;
`;

export function ThemeLayout() {
  const { name = '', lightOrDark = '' } = useParams();

  useEffect(() => {
    let title = 'CodeMirror 6 themes';
    if (name || lightOrDark) {
      title = `CodeMirror 6 ${name} ${lightOrDark ? ` ${lightOrDark}` : ''} theme`;
    }
    document.title = title;
  }, [name, lightOrDark]);

  return (
    <Warpper>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </Warpper>
  );
}
