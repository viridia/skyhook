import * as React from 'react';
import { styled } from './style';
import { darken, saturate } from 'polished';
import { SizeVariant, ControlHeight, FontHeight } from './variant';

export type ButtonKind = 'action' | 'primary' | 'default';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: SizeVariant;
  kind?: ButtonKind;
}

const ButtonImpl =
    React.forwardRef(({ children, className, size, kind, ...attrs }: ButtonProps, ref: any) => {
  return (
    <button ref={ref} className={className} {...attrs}>
      {children}
    </button>
  );
});

/** A standard button. */
export const Button = styled(ButtonImpl)`
  align-items: center;
  border: ${p => {
    const kind = p.theme.button[p.kind];
    return kind && kind.borderColor ? `1px solid ${kind.borderColor}` : 'none'}
  };
  border-radius: ${p => p.theme.button.roundCorners ? '4px' : 0};
  background-color: ${p => p.theme.button[p.kind].bgColor};
  color: ${p => p.theme.button[p.kind].textColor};
  display: inline-flex;
  font-family: ubuntu;
  font-size: ${p => FontHeight[p.size]};
  padding: 0 12px;
  height: ${p => ControlHeight[p.size]};
  outline: none;
  white-space: nowrap;

  &[disabled] {
    opacity: 0.6;
    > svg {
      opacity: 0.3;
    }
  }

  &:focus {
    box-shadow: 0 0 0 3px ${p => p.theme.focusColor};
    z-index: 1;
  }

  &:hover:not([disabled]) {
    background-color: ${p => darken(0.05, p.theme.button[p.kind].bgColor)};
  }

  &:active:not([disabled]) {
    background-color: ${p =>
        saturate(0.1, darken(0.15, p.theme.button[p.kind].bgColor))};
  }

  > svg {
    margin-right: 4px;
    margin-left: -5px;
    fill: ${p => p.theme.button[p.kind].textColor};

    &:only-child {
      margin: 0;
    }
  }
`;

Button.defaultProps = {
  kind: 'default',
  size: 'normal',
};
