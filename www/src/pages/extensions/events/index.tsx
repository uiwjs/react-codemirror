import MarkdownPreview from '@uiw/react-markdown-preview';
import data from '@uiw/codemirror-extensions-events/README.md';
import * as events from '@uiw/codemirror-extensions-events';
import CodeMirror from '@uiw/react-codemirror';
import styled from 'styled-components';
import { useState } from 'react';
import { langs } from '@uiw/codemirror-extensions-langs';
import { useTheme } from '../../../utils/useTheme';
import { PageWarpper } from '../';

const Info = styled.div`
  padding-bottom: 30px;
`;

export const EventsDoc = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [eventType, setEventType] = useState('');
  const { theme } = useTheme();

  return (
    <PageWarpper>
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
    </PageWarpper>
  );
};
