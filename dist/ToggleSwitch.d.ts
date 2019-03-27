interface Props {
    checked?: boolean;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
}
declare function ToggleSwitchImpl({ checked, disabled, className, ...props }: Props): JSX.Element;
export declare const ToggleSwitch: import("styled-components").StyledComponent<typeof ToggleSwitchImpl, import("./theme/Theme").Theme, {}, never>;
export {};
