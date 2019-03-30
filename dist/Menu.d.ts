import * as React from 'react';
interface Props extends React.InputHTMLAttributes<HTMLDivElement> {
    checkable?: boolean;
}
/** Drop-down menu class. */
export declare const Menu: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<Props & React.RefAttributes<{}>>, import("./style").Theme, {}, never>;
export interface MenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    active?: boolean;
    eventKey?: string;
    onClick?: (e: any) => void;
}
export declare function MenuItemImpl({ onClick, active, eventKey, className, ...props }: MenuItemProps): JSX.Element;
/** Menu item. */
export declare const MenuItem: import("styled-components").StyledComponent<typeof MenuItemImpl, import("./style").Theme, {
    tabIndex: -1;
}, "tabIndex">;
/** Menu divider. */
export declare const MenuDivider: import("styled-components").StyledComponent<"div", import("./style").Theme, {}, never>;
export {};
