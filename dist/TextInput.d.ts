import * as React from 'react';
import { ValidationState } from './ValidationMsg';
interface InputProps {
    containerClassName?: string;
    validationMsg?: string;
    validationStatus?: ValidationState;
}
/** Text input form control. */
export declare const TextInput: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<InputProps & React.InputHTMLAttributes<HTMLInputElement> & React.RefAttributes<{}>>, import("./theme/Theme").Theme, {}, never>;
export {};
