import * as React from 'react';
import { SizeVariant } from 'variant';
interface Props {
    children?: React.ReactNode;
    className?: string;
    value: number;
    min?: number;
    max?: number;
    size?: SizeVariant;
}
export declare function ProgressBar({ value, min, max, className, size, children }: Props): JSX.Element;
export {};
