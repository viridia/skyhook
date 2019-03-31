import * as React from 'react';
export interface RadioButtonGroupProps {
    id: string;
    children: React.ReactNode;
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
}
declare function RadioButtonGroupImpl({ id, className, children, value, onChange }: RadioButtonGroupProps): JSX.Element;
export declare const RadioButtonGroup: import("styled-components").StyledComponent<typeof RadioButtonGroupImpl, import("./style").Theme, {}, never>;
export {};
