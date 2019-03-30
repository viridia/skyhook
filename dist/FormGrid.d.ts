import * as React from 'react';
export declare type FormLayoutStyle = 'stacked' | 'inline' | 'ledger' | 'row' | 'column';
export interface FormGridProps {
    layout?: FormLayoutStyle;
}
export declare const FormLayoutCSS: import("styled-components").FlattenSimpleInterpolation;
declare function FormGridImpl({ children, className, layout, ...attrs }: React.FormHTMLAttributes<HTMLElement> & FormGridProps): JSX.Element;
export declare const FormGrid: import("styled-components").StyledComponent<typeof FormGridImpl, import("./style").Theme, {}, never>;
export declare const FormControlGroup: import("styled-components").StyledComponent<"span", import("./style").Theme, {}, never>;
export {};
