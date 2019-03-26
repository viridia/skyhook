import * as React from 'react';
import { ControlSize } from './variant';
export declare type ButtonKind = 'action' | 'primary' | 'default';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: ControlSize;
    kind?: ButtonKind;
    type?: string;
}
/** A standard button. */
export declare const Button: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<{}>>, import("./theme/Theme").Theme, {}, never>;
