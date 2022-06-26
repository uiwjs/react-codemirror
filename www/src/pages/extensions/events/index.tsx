import MarkdownPreview from '@uiw/react-markdown-preview';
import data from '@uiw/codemirror-extensions-events/README.md';
import * as events from '@uiw/codemirror-extensions-events';
import CodeMirror, { ReactCodeMirrorProps } from '@uiw/react-codemirror';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { langs } from '../../../langs';

const Warpper = styled.div`
  flex: 1;
  max-width: 980px;
  padding: 20px 20px 120px 20px;
`;

const Info = styled.div`
  padding-bottom: 30px;
`;

export const EventsDoc = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [eventType, setEventType] = useState('');
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
      <CodeMirror
        value={data.source}
        theme={theme}
        height="200px"
        style={{ margin: '0 0 23px 0' }}
        extensions={[
          langs.markdown(),
          events.scroll({
            scroll: (evn) => {
              if (evn.target instanceof HTMLElement) {
                setScrollTop(evn.target.scrollTop);
              }
            },
          }),
          events.content({
            focus: (evn) => {
              setEventType('focus');
            },
            blur: (evn) => {
              setEventType('blur');
            },
          }),
        ]}
      />
      <Info>
        {scrollTop} {eventType}
      </Info>
      <MarkdownPreview source={data.source} />
    </Warpper>
  );
};
