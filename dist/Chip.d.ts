import * as React from 'react';
import { SizeVariant } from 'variant';
export interface ChipProps {
    children: React.ReactNode;
    className?: string;
    color?: string;
    size?: SizeVariant;
    onClose?: () => void;
}
declare function ChipImpl({ children, className, onClose, size }: ChipProps): JSX.Element;
export declare const Chip: import("styled-components").StyledComponent<typeof ChipImpl, import("./style").Theme, {
    titleColor: string;
    hoverColor: string;
}, "titleColor" | "hoverColor">;
export {};
