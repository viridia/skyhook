import * as React from 'react';
import { SizeVariant } from 'variant';
export interface ProgressBarProps {
    children?: React.ReactNode;
    className?: string;
    value: number;
    min?: number;
    max?: number;
    size?: SizeVariant;
}
export declare function ProgressBar({ value, min, max, className, size, children }: ProgressBarProps): JSX.Element;
