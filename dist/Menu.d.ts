import * as React from 'react';
/** Drop-down menu class. */
export declare const Menu: import("styled-components").StyledComponent<"div", import("./theme/Theme").Theme, {
    role: "menu";
}, "role">;
export interface MenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    active?: boolean;
    eventKey?: string;
    onClick?: (e: any) => void;
}
export declare function MenuItemImpl({ onClick, active, eventKey, className, ...props }: MenuItemProps): JSX.Element;
/** Menu item. */
export declare const MenuItem: import("styled-components").StyledComponent<typeof MenuItemImpl, import("./theme/Theme").Theme, {
    tabIndex: -1;
}, "tabIndex">;
/** Menu divider. */
export declare const MenuDivider: import("styled-components").StyledComponent<"div", import("./theme/Theme").Theme, {}, never>;
