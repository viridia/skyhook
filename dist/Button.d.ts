import * as React from 'react';
import { SizeVariant } from './variant';
export declare type ButtonKind = 'action' | 'primary' | 'default';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: SizeVariant;
    kind?: ButtonKind;
}
/** A standard button. */
export declare const Button: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<{}>>, import("./theme/Theme").Theme, {}, never>;
