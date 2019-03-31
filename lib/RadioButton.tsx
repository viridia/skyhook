import * as React from 'react';
import classNames from 'classnames';
import { styled } from './style';

export interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  selected?: boolean;
}

const RadioButtonImpl = React.forwardRef(
    ({ id, children, className, checked, selected, ...props }: RadioButtonProps, ref: any) => {
  const disabled = props.disabled;
  return (
    <label
      id={id}
      className={classNames(className, { disabled, selected })}
      role="radio"
      aria-checked={checked}
    >
      <input aria-hidden={true} type="radio" ref={ref} {...props} checked={checked} />
      <span aria-hidden={true} className="radio" />
      <span className="caption">{children}</span>
    </label>
  );
});

export const RadioButton = styled(RadioButtonImpl)`
  align-items: center;
  color: ${p => p.theme.textNormal};
  cursor: pointer;
  display: inline-flex;
  outline: none;

  > input {
    display: none;
  }

  > .radio {
    background-color: ${p => p.theme.button.radio.bgColor};
    border: 1px solid ${p => p.theme.button.radio.borderColor};
    border-radius: 50%;
    width: 16px;
    height: 16px;
    margin-right: 6px;
  }

  > input:checked ~ .radio:after {
    content: "";
    display: block;
    background-color: ${p => p.theme.button.radio.textColor};
    border-radius: 50%;
    left: 3px;
    top: 3px;
    position: relative;
    width: 10px;
    height: 10px;
  }

  &.disabled {
    cursor: default;
    > .caption {
      opacity: 0.7;
    }
  }
`;
