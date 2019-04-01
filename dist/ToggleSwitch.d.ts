export interface ToggleSwitchProps {
    checked?: boolean;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
}
declare function ToggleSwitchImpl({ checked, disabled, className, ...props }: ToggleSwitchProps): JSX.Element;
export declare const ToggleSwitch: import("styled-components").StyledComponent<typeof ToggleSwitchImpl, import("./style").Theme, {}, never>;
export declare const InsetToggleSwitch: import("styled-components").StyledComponent<typeof ToggleSwitchImpl, import("./style").Theme, {}, never>;
export {};
