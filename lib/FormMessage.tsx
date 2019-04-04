import * as React from 'react';
import { styled } from './style';
import classNames from 'classnames';
import { ValidationState } from './ValidationMsg';

export interface FormMessageProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  state: ValidationState;
}

function FormMessageImpl({ children, state, className }: FormMessageProps) {
  return (
    <section className={classNames(className, state)}>{children}</section>
  )
}

/** Error or warning message for a form. */
export const FormMessage = styled(FormMessageImpl)`
  align-items: center;
  display: flex;
  flex-direction: column;
  grid-column: controls;
  justify-self: stretch;
  padding: .4rem 1rem;

  &.success {
    background-color: #00cc0022;
    border: 1px solid #00cc0033;
  }

  &.warning {
    background-color: #cccc0044;
    border: 1px solid #cccc0055;
  }

  &.error {
    background-color: #ff444433;
    border: 1px solid #ff444444;
  }
`;
