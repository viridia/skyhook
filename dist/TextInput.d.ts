import * as React from 'react';
import { ValidationState } from './ValidationMsg';
export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    containerClassName?: string;
    validationMsg?: string;
    validationStatus?: ValidationState;
}
/** Text input form control. */
export declare const TextInput: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<TextInputProps & React.RefAttributes<{}>>, import("./style").Theme, {}, never>;
