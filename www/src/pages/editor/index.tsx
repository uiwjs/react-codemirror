import { useEffect, useState } from 'react';
import CodeMirror, { ReactCodeMirrorProps } from '@uiw/react-codemirror';
import styled from 'styled-components';
import '@wcj/dark-mode';
import { thmeCode } from './themeCode';

const Warpper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const Tools = styled.div``;

const Content = styled.div`
  display: flex;
  flex: 1;
`;

const Sider = styled.div`
  width: 230px;
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

const EditorView = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 42px);
`;

export function ThemeEditor() {
  const dark = document.documentElement.getAttribute('data-color-mode');
  const [theme, setTheme] = useState<ReactCodeMirrorProps['theme']>(dark === 'dark' ? 'dark' : 'light');

  useEffect(() => {
    setTheme(document.documentElement.getAttribute('data-color-mode') === 'dark' ? 'dark' : 'light');
    document.addEventListener('colorschemechange', (e) => {
      setTheme(e.detail.colorScheme as ReactCodeMirrorProps['theme']);
    });
  }, []);
  return (
    <Warpper>
      <Header>
        <Title>CodeMirror Theme Editor</Title>
        <Tools>
          <dark-mode permanent />
        </Tools>
      </Header>
      <Content>
        <Sider>Theme Editor</Sider>
        <EditorView>
          <CodeMirror theme={theme} value={thmeCode()} height="100%" style={{ minHeight: '100%' }} />
        </EditorView>
      </Content>
    </Warpper>
  );
}
