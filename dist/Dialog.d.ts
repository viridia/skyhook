import * as React from 'react';
interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
    children?: React.ReactNode;
    className?: string;
    hasClose?: boolean;
}
declare function HeaderImpl({ children, className, hasClose, ...props }: HeaderProps): JSX.Element;
export interface DialogProps {
    children?: React.ReactNode;
    className?: string;
    frameClassName?: string;
    keyboard?: boolean;
    open?: boolean;
    style?: any;
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
    /** Called when the dialog first opens. */
    onOpen?: () => void;
    /** Indicates that the dialog wants to close. */
    onClose: () => void;
    /** Indicates that the dialog has finished closing. */
    onExited?: () => void;
}
/** Modal dialog class */
export declare class Dialog extends React.Component<DialogProps> {
    static Header: import("styled-components").StyledComponent<typeof HeaderImpl, import("./style").Theme, {}, never>;
    static Body: import("styled-components").StyledComponent<"section", import("./style").Theme, {}, never>;
    static Footer: import("styled-components").StyledComponent<"footer", import("./style").Theme, {}, never>;
    render(): JSX.Element;
}
export {};
