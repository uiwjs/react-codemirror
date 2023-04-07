import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Tools = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  & a {
    display: flex;
    align-items: center;
  }
`;

const style = css`
  padding: 2px 5px;
  border-radius: 3px;
  text-decoration: none;
  color: var(--color-accent-emphasis);
  &.active {
    background-color: var(--color-neutral-muted);
    color: var(--color-fg-default);
  }
`;

export const Link = styled(NavLink)`
  ${style}
`;

export const Hyperlink = styled.a`
  ${style}
`;

export const NavMenus = () => {
  return (
    <Tools>
      <Link to="/">Home</Link>
      <Link to="/extensions">Extensions</Link>
      <Link to="/merge/document">Merge</Link>
      <Link to="/theme">Themes</Link>
      <Link to="/editor/theme">Themes Editor</Link>
      <Link to="/theme/doc">Theme Doc</Link>
      <Hyperlink href="https://github.com/uiwjs/react-codemirror" target="__blank">
        Github
      </Hyperlink>
      <dark-mode permanent />
    </Tools>
  );
};
