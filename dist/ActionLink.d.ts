import * as React from 'react';
export declare type ActionLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
declare function ActionLinkImpl({ children, className, ...attrs }: ActionLinkProps): JSX.Element;
/** Looks like a link, but takes an action. */
export declare const ActionLink: import("styled-components").StyledComponent<typeof ActionLinkImpl, import("./style").Theme, {}, never>;
export {};
