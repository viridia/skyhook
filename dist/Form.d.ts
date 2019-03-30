import * as React from 'react';
import { FormGridProps } from './FormGrid';
export declare type FormProps = React.FormHTMLAttributes<HTMLFormElement> & FormGridProps;
declare function FormImpl({ children, className, layout, ...attrs }: FormProps): JSX.Element;
export declare const Form: import("styled-components").StyledComponent<typeof FormImpl, import("./style").Theme, {}, never>;
export {};
