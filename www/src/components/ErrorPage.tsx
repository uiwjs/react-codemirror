import React, { forwardRef, PropsWithoutRef } from 'react';
import { useRouteError } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div``;
const Status = styled.em`
  font-weight: bold;
  display: inline-block;
  margin-right: 10px;
  font-size: 21px;
`;

export interface ErrorPageProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ErrorPage = forwardRef<HTMLDivElement, PropsWithoutRef<ErrorPageProps>>(
  ({ children, ...htmlProps }, ref) => {
    const error = useRouteError() as Response;
    return (
      <Wrapper id="error-page" {...htmlProps} ref={ref}>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          {error?.status && <Status>{error?.status}</Status>}
          {error?.statusText && <i>{error?.statusText}</i>}
        </p>
      </Wrapper>
    );
  },
);
