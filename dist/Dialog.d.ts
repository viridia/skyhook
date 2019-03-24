import * as React from 'react';
interface HeaderProps {
    children?: React.ReactNode;
    className?: string;
    hasClose?: boolean;
}
declare function HeaderImpl({ children, className, hasClose }: HeaderProps): JSX.Element;
interface Props {
    children?: React.ReactNode;
    className?: string;
    frameClassName?: string;
    keyboard?: boolean;
    open?: boolean;
    style?: any;
    /** Called when the dialog first opens. */
    onOpen?: () => void;
    /** Indicates that the dialog wants to close. */
    onClose: () => void;
    /** Indicates that the dialog has finished closing. */
    onExited?: () => void;
}
/** Modal dialog class */
export declare class Dialog extends React.Component<Props> {
    static Header: import("styled-components").StyledComponent<typeof HeaderImpl, import("./theme/Theme").Theme, {}, never>;
    static Body: import("styled-components").StyledComponent<"section", import("./theme/Theme").Theme, {}, never>;
    static Footer: import("styled-components").StyledComponent<"footer", import("./theme/Theme").Theme, {}, never>;
    render(): JSX.Element;
}
export {};
