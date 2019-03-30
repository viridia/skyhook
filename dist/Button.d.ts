import * as React from 'react';
import { SizeVariant } from './variant';
export declare type StyleVariant = 'action' | 'primary' | 'default';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: SizeVariant;
    variant?: StyleVariant;
}
/** A standard button. */
export declare const Button: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<{}>>, import("./style").Theme, {}, never>;
