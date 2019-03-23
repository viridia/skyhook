import * as React from 'react';
import classNames from 'classnames';
import { css, styled } from './style';

export type FormLayoutStyle = 'stacked' | 'inline' | 'ledger' | 'row' | 'column';

export interface FormLayoutProps {
  layout?: FormLayoutStyle;
}

export const FormLayoutCSS = css`
  &.layout-ledger {
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: [labels] auto [controls] 1fr;
    gap: 8px;
    align-items: flex-start;
    justify-items: flex-start;
  }

  &.layout-stacked {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &.layout-column {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &.layout-inline {
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    align-items: center;
  }

  &.layout-row {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
`;

function FormLayoutImpl({ children, className, layout = 'ledger', ...attrs }:
    React.FormHTMLAttributes<HTMLElement> & FormLayoutProps) {
  return (
    <section className={classNames(className, `layout-${layout}`)} {...attrs}>
      {children}
    </section>
  );
}

export const FormLayout = styled(FormLayoutImpl)`
  ${FormLayoutCSS}
`;

export const FormControlGroup = styled.span`
  grid-column: controls;
`;
