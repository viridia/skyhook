import * as React from 'react';
export interface MenuProps extends React.InputHTMLAttributes<HTMLDivElement> {
    checkable?: boolean;
}
/** Drop-down menu class. */
export declare const Menu: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<MenuProps & React.RefAttributes<unknown>>, import("./style").Theme, {}, never>;
export interface MenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    checked?: boolean;
    active?: boolean;
    eventKey?: string;
    onClick?: (e: any) => void;
}
export declare function MenuItemImpl({ onClick, checked, active, eventKey, className, ...props }: MenuItemProps): JSX.Element;
/** Menu item. */
export declare const MenuItem: import("styled-components").StyledComponent<typeof MenuItemImpl, import("./style").Theme, {
    tabIndex: -1;
}, "tabIndex">;
/** Menu divider. */
export declare const MenuDivider: import("styled-components").StyledComponent<"div", import("./style").Theme, {}, never>;
