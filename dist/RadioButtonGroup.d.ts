import * as React from 'react';
interface Props {
    id: string;
    children: React.ReactNode;
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
}
declare function RadioButtonGroupImpl({ id, className, children, value, onChange }: Props): JSX.Element;
export declare const RadioButtonGroup: import("styled-components").StyledComponent<typeof RadioButtonGroupImpl, import("./style").Theme, {}, never>;
export {};
