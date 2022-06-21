import { FC, PropsWithoutRef } from 'react';
import styled, { css } from 'styled-components';

const Pre = styled.pre`
  border: 1px solid var(--color-border-default);
  background-color: var(--color-canvas-subtle);
  display: inline-block;
  padding: 10px 13px;
  border-radius: 5px;
`;

const Span = styled.span<{ number: number }>`
  ${(props) =>
    props.number === 0 &&
    css`
      color: var(--color-accent-emphasis);
    `}
  ${(props) =>
    props.number === 2 &&
    css`
      color: var(--color-danger-fg);
    `}
`;

export const PreCode: FC<PropsWithoutRef<{ value?: string }>> = ({ value = '' }) => {
  return (
    <Pre>
      {value.split(' ').map((str, idx) => {
        return (
          <Span key={idx} number={idx}>
            {str}{' '}
          </Span>
        );
      })}
    </Pre>
  );
};
