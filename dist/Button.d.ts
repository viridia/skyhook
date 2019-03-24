import * as React from 'react';
import { ControlSize, ControlStyle } from './variant';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: ControlSize;
    kind?: ControlStyle;
    type?: string;
}
/** A standard button. */
export declare const Button: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<{}>>, import("./theme/Theme").Theme, {}, never>;
