import styled from 'styled-components';
import { Outlet, useLocation, NavLink } from 'react-router-dom';
import { Header, Wrapper } from './Header';
import { Link } from './NavMenus';
import { routes } from '../router';

export const Content = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
`;

export const Sider = styled.div`
  width: 220px;
  min-width: 220px;
  overflow: auto;
  height: calc(100vh - 42px);
  padding: 18px 16px 120px 16px;
  border-right: 1px solid var(--color-border-default);
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const MenuItem = styled(NavLink)`
  cursor: pointer;
  padding: 6px 8px;
  font-size: 16px;
  text-decoration: none;
  text-transform: capitalize;
  border-radius: 2px;
  transition: background-color 0.3s;
  color: var(--color-accent-emphasis);
  &.active {
    background-color: var(--color-neutral-muted);
    color: var(--color-theme-text);
  }
  &:hover {
    background-color: var(--color-neutral-muted);
  }
`;

export const Layout = () => {
  const location = useLocation();
  const childs = routes[0].children?.find((item) => {
    return item.path === location.pathname.split('/')[1];
  });
  return (
    <Wrapper>
      <Header>
        {routes[0].children?.map((item, key) => {
          if (!item.label) return null;
          return (
            <Link to={`/${item.path || ''}`} key={key}>
              {item.label}
            </Link>
          );
        })}
      </Header>
      <Content>
        {childs && childs.children?.length && (
          <Sider>
            {childs &&
              childs.children?.map((item, key) => {
                if (!item.label) return null;
                return (
                  <MenuItem to={`/${childs.path}/${item.path || ''}`} key={key}>
                    {item.label}
                  </MenuItem>
                );
              })}
          </Sider>
        )}
        <Outlet />
      </Content>
    </Wrapper>
  );
};
