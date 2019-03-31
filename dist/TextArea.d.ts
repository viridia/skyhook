import * as React from 'react';
import { ValidationState } from './ValidationMsg';
export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    containerClassName?: string;
    validationMsg?: string;
    validationStatus?: ValidationState;
}
/** Textarea input form control. */
export declare const TextArea: import("styled-components").StyledComponent<({ children, className, containerClassName, validationStatus, validationMsg, ...attrs }: TextAreaProps) => JSX.Element, import("./style").Theme, {}, never>;
