import * as React from 'react';
import { ValidationState } from './ValidationMsg';
export interface FormMessageProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    state: ValidationState;
}
declare function FormMessageImpl({ children, state, className }: FormMessageProps): JSX.Element;
/** Error or warning message for a form. */
export declare const FormMessage: import("styled-components").StyledComponent<typeof FormMessageImpl, import("./style").Theme, {}, never>;
export {};
