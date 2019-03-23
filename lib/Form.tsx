import * as React from 'react';
import classNames from 'classnames';
import { styled } from './style';
import { FormLayoutProps, FormLayoutCSS } from './FormLayout';

export type FormProps = React.FormHTMLAttributes<HTMLFormElement> & FormLayoutProps;

function FormImpl({ children, className, layout = 'ledger', ...attrs }: FormProps) {
  return (
    <form className={classNames(className, `layout-${layout}`)} {...attrs}>
      {children}
    </form>
  );
}

export const Form = styled(FormImpl)`
  ${FormLayoutCSS}
`;
