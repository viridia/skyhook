import * as React from 'react';
export interface ButtonGroupProps {
    children?: React.ReactNode;
    className?: string;
    vertical?: boolean;
}
declare function ButtonGroupImpl({ children, className, vertical, ...attrs }: ButtonGroupProps): JSX.Element;
export declare const ButtonGroup: import("styled-components").StyledComponent<typeof ButtonGroupImpl, import("./style").Theme, {}, never>;
export {};
