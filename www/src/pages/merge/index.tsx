import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';
import BackToUp from '@uiw/react-back-to-top';
import { Example } from './Example';
import { Header, Warpper } from '../../components/Header';
import { Sider } from '../theme/editor';
import { Document } from '../extensions/Document';
import { PageWarpper } from '../extensions';
import { Content } from '../theme';
import { MenuItem } from '../theme/themes/SiderMenus';
import { mdSource } from './data';

export const MergeDoc = () => {
  return (
    <PageWarpper>
      <Example />
      <MarkdownPreview
        source={mdSource.document}
        style={{ width: 980, margin: '0 auto', padding: '50px 20px 150px 20px' }}
      />
      <BackToUp>Top</BackToUp>
    </PageWarpper>
  );
};

export const MergeLayout = () => {
  const location = useLocation();
  useEffect(() => {
    document.title = `${location.pathname.split('/').join(' ')} for CodeMirror 6`;
  }, [location]);
  return (
    <Warpper>
      <Header />
      <Content>
        <Sider>
          {Object.keys(mdSource).map((name, key) => {
            return (
              <MenuItem key={key} to={`/merge/${name}`}>
                {name.split('-').join(' ')}
              </MenuItem>
            );
          })}
        </Sider>
        <Document>
          <Outlet />
        </Document>
      </Content>
    </Warpper>
  );
};
