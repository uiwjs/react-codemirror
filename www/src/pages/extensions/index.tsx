import { Outlet } from 'react-router-dom';
import { Warpper, Header, Title, Tools, Link, Content } from '../theme';
import logo from '../../logo.png';

export const Extensions = () => {};

export const ExtensionsLayout = () => {
  return (
    <Warpper>
      <Header>
        <Title to="/">
          <img src={logo} alt="Logo" />
          <span>CodeMirror Extensions</span>
        </Title>
        <Tools>
          <Link to="/">Home</Link>
          <Link to="/extensions/events">Events</Link>
          <dark-mode permanent />
        </Tools>
      </Header>
      <Content>
        <Outlet />
      </Content>
    </Warpper>
  );
};
