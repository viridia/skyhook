import * as React from 'react';
import { SizeVariant } from './variant';
export declare type ButtonVariant = 'action' | 'primary' | 'default';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: SizeVariant;
    variant?: ButtonVariant;
}
/** A standard button. */
export declare const Button: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<unknown>>, import("./style").Theme, {}, never>;
