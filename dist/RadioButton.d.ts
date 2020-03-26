import * as React from 'react';
export interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value?: string;
    selected?: boolean;
}
export declare const RadioButton: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<RadioButtonProps & React.RefAttributes<unknown>>, import("./style").Theme, {}, never>;
