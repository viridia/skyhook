import * as React from 'react';
import { SizeVariant } from 'variant';
interface Props {
    children: React.ReactNode;
    className?: string;
    color?: string;
    size?: SizeVariant;
    onClose?: () => void;
}
declare function ChipImpl({ children, className, onClose, size }: Props): JSX.Element;
export declare const Chip: import("styled-components").StyledComponent<typeof ChipImpl, import("./theme/Theme").Theme, {
    titleColor: string;
    hoverColor: string;
}, "titleColor" | "hoverColor">;
export {};
