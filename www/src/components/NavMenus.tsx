import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FC, PropsWithChildren } from 'react';

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

export const NavMenus: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Tools>
      {children}
      <Hyperlink href="https://github.com/uiwjs/react-codemirror" target="__blank">
        Github
      </Hyperlink>
      <dark-mode permanent />
    </Tools>
  );
};
