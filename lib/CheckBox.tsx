import * as React from 'react';
import classNames from 'classnames';
import { styled } from './style';

export declare type CheckBoxProps = React.InputHTMLAttributes<HTMLInputElement>;

const CheckBoxImpl = React.forwardRef(
    ({ id, children, className, checked, onChange, ...props }: CheckBoxProps,
    ref: any) => {
  const disabled = props.disabled;
  return (
    <label
      id={id}
      className={classNames(className, 'form-control', { disabled })}
    >
      <input
        {...props}
        type="checkbox"
        checked={checked}
        ref={ref}
        onChange={onChange}
        tabIndex={0}
      />
      <span aria-hidden={true} className="checkbox" />
      {children && <span className="caption">{children}</span>}
    </label>
  );
});

export const CheckBox = styled(CheckBoxImpl)`
  align-items: center;
  cursor: pointer;
  color: ${p => p.theme.textNormal};
  display: inline-flex;
  outline: none;
  position: relative;

  > .checkbox {
    background-color: ${p => p.theme.button.radio.bgColor};
    border: 2px solid ${p => p.theme.button.radio.borderColor};
    border-radius: 3px;
    height: 1rem;
    margin-right: 6px;
    position: relative;
    width: 1rem;
  }

  &:focus-within > .checkbox {
    box-shadow: 0 0 0 3px ${p => p.theme.focusColor};
    z-index: 1;
  }

  > input {
    opacity: 0;
    position: absolute;
    left: 0;
    height: 1rem;
    width: 1rem;
    /* display: none; */
  }

  &.disabled {
    cursor: default;
    > .caption {
      opacity: 0.7;
    }
  }

  > input:checked ~ .checkbox::after {
    position: absolute;
    content: '';
    border-width: 0 3px 3px 0;
    border-color: ${p => p.theme.button.radio.textColor};
    border-style: solid;
    left: 4px;
    transform: scaleX(0.7) rotate(45deg);
    top: -3px;
    width: .4rem;
    height: .9rem;
  }

  > input:indeterminate ~ .checkbox::after {
    position: absolute;
    content: '';
    border-width: 0 0 3px 0;
    border-color: ${p => p.theme.button.radio.borderColor};
    border-style: solid;
    left: 3px;
    top: .45rem;
    width: .6rem;
    height: 0;
  }
`;
