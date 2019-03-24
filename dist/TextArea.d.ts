import * as React from 'react';
import { ValidationState } from './ValidationMsg';
interface Props {
    containerClassName?: string;
    validationMsg?: string;
    validationStatus?: ValidationState;
}
/** Textarea input form control. */
export declare const TextArea: import("styled-components").StyledComponent<({ children, className, containerClassName, validationStatus, validationMsg, ...attrs }: Props & React.TextareaHTMLAttributes<HTMLTextAreaElement>) => JSX.Element, import("./theme/Theme").Theme, {}, never>;
export {};
