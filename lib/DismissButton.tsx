import * as React from 'react';
import { Button, ButtonProps } from './Button';
import styled from 'styled-components';
import CloseIcon from './icons-compiled/IcClose';

export const DismissButtonStyle = styled(Button)`
  align-items: center;
  background-color: transparent;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  justify-content: center;
  margin: 0 .3rem;
  padding: 0;
  height: 20px;
  font-size: 85%;

  > svg {
    width: 20px;
    height: 20px;
    opacity: .7;
  }
`;

export function DismissButton(props: ButtonProps) {
  return <DismissButtonStyle {...props}><CloseIcon /></DismissButtonStyle>;
}
