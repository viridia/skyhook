import * as React from 'react';
export interface TooltipProps {
    children: React.ReactElement;
    content: () => JSX.Element;
    placement: 'left' | 'right' | 'top' | 'bottom';
}
export declare function Tooltip({ children, content, placement }: TooltipProps): JSX.Element;
