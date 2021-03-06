import * as React from 'react';
import { ButtonVariant } from './Button';
import { SizeVariant } from 'variant';
export interface DropdownButtonProps {
    alignEnd?: boolean;
    disabled?: boolean;
    checkable?: boolean;
    drop?: 'up' | 'left' | 'right' | 'down';
    variant?: ButtonVariant;
    size?: SizeVariant;
    id?: string;
    className?: string;
    children: React.ReactNode;
    title: React.ReactNode;
    onSelect?: (key: string) => any;
}
export declare function DropdownButton({ drop, disabled, checkable, size, alignEnd, className, children, title, variant, onSelect, }: DropdownButtonProps): JSX.Element;
