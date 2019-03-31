import * as React from 'react';
import classNames from 'classnames';
import { styled } from './style';

export interface ButtonGroupProps {
  children?: React.ReactNode;
  className?: string;
  vertical?: boolean;
}

function ButtonGroupImpl({ children, className, vertical, ...attrs }: ButtonGroupProps) {
  return (
    <div className={classNames(className, { vertical })} {...attrs}>
      {children}
    </div>
  );
}

export const ButtonGroup = styled(ButtonGroupImpl)`
  align-items: center;
  border: none;
  display: inline-flex;
  flex-direction: row;

  &.vertical {
    flex-direction: column;
  }

  > button {
    border-radius: 0;
    margin-right: -1px;
    &:first-child {
      border-radius: ${p => p.theme.button.roundCorners ? '4px 0 0 4px' : 0};
    }
    &:last-child {
      border-radius: ${p => p.theme.button.roundCorners ? '0 4px 4px 0' : 0};
      margin-right: 0;
    }
  }
`;
