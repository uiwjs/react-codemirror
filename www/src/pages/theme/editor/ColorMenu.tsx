import { PropsWithChildren } from 'react';
import styled from 'styled-components';

export interface ColorMenuProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  color?: string;
}

const Warpper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.div`
  /* font-weight: bold; */
`;

const Input = styled.input<{ ref?: any }>`
  width: 23px;
  height: 23px;
  padding: 0;
`;

export const ColorMenu: React.FC<PropsWithChildren<ColorMenuProps>> = ({ color, children, ...other }) => {
  return (
    <Warpper>
      <Label>{children}</Label>
      <Input type="color" value={color} {...other} />
    </Warpper>
  );
};
