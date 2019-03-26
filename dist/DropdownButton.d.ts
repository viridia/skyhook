import * as React from 'react';
import { ButtonKind } from './Button';
import { ControlSize } from 'variant';
export interface DropdownButtonProps {
    alignEnd?: boolean;
    disabled?: boolean;
    drop?: 'up' | 'left' | 'right' | 'down';
    kind?: ButtonKind;
    size?: ControlSize;
    id?: string;
    className?: string;
    children: React.ReactNode;
    title: React.ReactNode;
    onSelect?: (key: string) => any;
}
export declare function DropdownButton({ drop, disabled, size, alignEnd, className, children, title, kind, onSelect, }: DropdownButtonProps): JSX.Element;
