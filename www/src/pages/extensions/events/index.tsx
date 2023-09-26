import * as events from '@uiw/codemirror-extensions-events';
import CodeMirror from '@uiw/react-codemirror';
import styled from 'styled-components';
import { useContext, useState } from 'react';
import { langs } from '@uiw/codemirror-extensions-langs';
import { Preview, MdContext } from '../../theme/Preview';
import { useTheme } from '../../../utils/useTheme';
import { PageWarpper } from '..';

const Info = styled.div`
  padding-bottom: 30px;
`;

export const EventsExample = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [eventType, setEventType] = useState('');
  const { theme } = useTheme();
  const mdData = useContext(MdContext);
  return (
    <PageWarpper>
      <CodeMirror
        value={mdData.mdstr}
        theme={theme}
        height="200px !important"
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
    </PageWarpper>
  );
};

export const Component = () => {
  return (
    <Preview path={() => import('@uiw/codemirror-extensions-events/README.md')}>
      <EventsExample />
    </Preview>
  );
};
