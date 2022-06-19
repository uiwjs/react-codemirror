import { FC, PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';
import { CreateThemeOptions } from '@uiw/codemirror-themes';

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

const ColorWarpper = styled.div<{ color?: string }>`
  width: 16px;
  height: 16px;
  overflow: hidden;
  border: 1px solid var(--color-border-default);
  border-radius: 3px;
  position: relative;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cpattern id='a' width='12' height='12' patternUnits='userSpaceOnUse'%3E%3Cpath fill='rgba(0, 0, 0, 0.06)' d='M0 0h8v8H0zm8 8h8v8H8z'/%3E%3C/pattern%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3C/svg%3E");
  &::before {
    content: ' ';
    display: block;
    position: absolute;
    left: 1px;
    right: 1px;
    top: 1px;
    bottom: 1px;
    border-radius: 2px;
    ${(props) =>
      props.color &&
      css`
        background-color: ${props.color};
      `}
  }
  input {
    position: relative;
    z-index: 3;
    border: 0;
    background-color: transparent;
    padding-left: 16px;
    height: 16px;
  }
`;

const ColorPicker: FC<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = ({
  children,
  onChange,
  ...props
}) => {
  return (
    <ColorWarpper color={props.value as string}>
      <input type="color" {...props} onChange={onChange} />
    </ColorWarpper>
  );
};

export const ColorMenu: React.FC<PropsWithChildren<ColorMenuProps>> = ({ color, children, ...other }) => {
  return (
    <Warpper>
      <Label>{children}</Label>
      <ColorPicker value={color} {...other} />
    </Warpper>
  );
};

interface SwitchThemeProps {
  theme?: CreateThemeOptions['dark'];
  onChange?: (theme: CreateThemeOptions['dark']) => void;
}

export const SwitchTheme = ({ theme, onChange }: SwitchThemeProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, theme: CreateThemeOptions['dark']) => {
    onChange && onChange(theme);
  };
  return (
    <div>
      <label>
        <input type="radio" name="theme" onChange={(evn) => handleChange(evn, 'light')} checked={theme === 'light'} />{' '}
        light
      </label>
      <label>
        <input type="radio" name="theme" onChange={(evn) => handleChange(evn, 'dark')} checked={theme === 'dark'} />{' '}
        dark
      </label>
    </div>
  );
};
