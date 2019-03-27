/** Colors for different buttons variants. */
export interface ButtonColors {
    bgColor: string;
    textColor: string;
    borderColor?: string;
}
/** Theme properties for buttons. */
export interface ButtonTheme {
    default: ButtonColors;
    action: ButtonColors;
    primary: ButtonColors;
    roundCorners?: boolean;
}
/** Theme properties for progress bars. */
export interface ProgressTheme {
    trackColor: string;
    thumbColor: string;
    textColor: string;
}
/** Theme properties for dialogs. */
export interface DialogTheme {
    backdropColor: string;
    bgColor: string;
    borderColor: string;
    headerBgColor: string;
    headerTextColor: string;
    shadowColor: string;
}
/** Theme properties for dialogs. */
export interface MenuTheme {
    bgColor: string;
    textColor: string;
    borderColor: string;
    focusBgColor: string;
    focusTextColor: string;
    hoverBgColor: string;
    hoverTextColor: string;
    dividerColor: string;
}
/** Theme properties for text fields. */
export interface TextField {
    bgColor: string;
    textColor: string;
    borderColor: string;
}
/** Combined theme. */
export interface Theme {
    pageColor: string;
    focusColor: string;
    textNormal: string;
    button: ButtonTheme;
    progress: ProgressTheme;
    dialog: DialogTheme;
    menu: MenuTheme;
    textField: TextField;
}
