import * as React from 'react';
import classNames from 'classnames';
import { css, styled } from './style';

export declare type FormLayoutStyle = 'stacked' | 'inline' | 'ledger' | 'row' | 'column';

export interface FormGridProps {
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

    .form-control {
      grid-column: controls;
    }
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

  &.layout-inline, &.layout-row {
    display: flex;
    flex-direction: row;

    > * {
      margin-left: 8px;
      &:first-child {
        margin-left: 0;
      }
    }
  }

  &.layout-inline {
    align-items: center;
    flex-flow: wrap;
  }

  &.layout-row {
    align-items: flex-start;
  }
`;

function FormGridImpl({ children, className, layout = 'ledger', ...attrs }:
    React.FormHTMLAttributes<HTMLElement> & FormGridProps) {
  return (
    <section className={classNames(className, `layout-${layout}`)} {...attrs}>
      {children}
    </section>
  );
}

export const FormGrid = styled(FormGridImpl)`
  ${FormLayoutCSS}
`;

export const FormControlGroup = styled.span`
  grid-column: controls;
`;
