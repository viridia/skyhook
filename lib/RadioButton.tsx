import * as React from 'react';
import classNames from 'classnames';
import { styled } from './style';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const RadioButtonImpl = React.forwardRef(({ children, className, ...props }: Props, ref: any) => {
  const disabled = props.disabled;
  return (
    <label className={classNames(className, { disabled })}>
      <input type="radio" ref={ref} {...props} />
      <span className="caption">{children}</span>
    </label>
  );
});

export const RadioButton = styled(RadioButtonImpl)`
  align-items: center;
  color: ${p => p.theme.textNormal};
  cursor: pointer;
  display: inline-flex;

  > input {
    margin-right: 6px;
  }

  &.disabled {
    cursor: default;
    > .caption {
      opacity: 0.7;
    }
  }
`;
