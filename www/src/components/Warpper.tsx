import styled from 'styled-components';
import BackToUp from '@uiw/react-back-to-top';
import { useRef, useState, useEffect, FC, PropsWithChildren } from 'react';
import { ScrollRestoration } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 42px);
`;

export const Warpper: FC<PropsWithChildren<{}>> = (props) => {
  const $dom = useRef<HTMLDivElement>(null);
  const [element, setElement] = useState<HTMLDivElement>();
  useEffect(() => setElement($dom.current!), []);
  return (
    <Container ref={$dom} {...props}>
      {props.children}
      <BackToUp element={element} style={{ position: 'fixed' }}>
        Top
      </BackToUp>
      <ScrollRestoration />
    </Container>
  );
};
