import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import styled from 'styled-components';
import { Warpper, Header, Title, Tools, Link } from '../theme';
import { Document } from './Document';
import logo from '../../logo.png';
import { Sider } from '../theme/editor';
import { Content } from '../theme';
import { MenuItem } from '../theme/themes';
import { mdSource } from './datas';

export const PageWarpper = styled.div`
  flex: 1;
  max-width: 980px;
  padding: 20px 20px 120px 20px;
`;

export const Extensions = () => {};

export const ExtensionsLayout = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = `${location.pathname.split('/').join(' ')} for CodeMirror 6`;
  }, [location]);

  return (
    <Warpper>
      <Header>
        <Title to="/">
          <img src={logo} alt="Logo" />
          <span>CodeMirror Extensions</span>
        </Title>
        <Tools>
          <Link to="/">Home</Link>
          <Link to="/extensions">Extensions</Link>
          <Link to="/theme/data">Themes</Link>
          <dark-mode permanent />
        </Tools>
      </Header>
      <Content>
        <Sider>
          {Object.keys(mdSource).map((name, key) => {
            return (
              <MenuItem key={key} to={`/extensions/${name}`}>
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
