import * as React from 'react';
interface Props {
    autoSelect?: boolean;
}
/** A component which, when placed inside of a form element, will implement automatic navigation
    between fields when the enter key is pressed. */
export declare class AutoNavigate extends React.Component<Props> {
    private form;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private onKeyDown;
}
export {};
