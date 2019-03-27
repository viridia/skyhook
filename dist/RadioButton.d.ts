import * as React from 'react';
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    value?: string;
    selected?: boolean;
}
export declare const RadioButton: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<Props & React.RefAttributes<{}>>, import("./theme/Theme").Theme, {}, never>;
export {};
