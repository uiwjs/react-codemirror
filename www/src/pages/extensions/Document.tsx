import { FC, PropsWithChildren } from 'react';
import { Warpper, Content } from '../theme/themes/Document';

interface DocumentProps {
  name?: string;
}

export const Document: FC<PropsWithChildren<DocumentProps>> = ({ children, name }) => {
  return (
    <Warpper>
      <Content>{children}</Content>
    </Warpper>
  );
};
