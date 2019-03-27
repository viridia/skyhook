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
  radio: ButtonColors;
  roundCorners?: boolean;
}

/** Colors for toggle switch. */
export interface ToggleSwitchColors {
  slideColor: string;
  thumbColor: string;
  checkedSlideColor: string;
  checkedThumbColor: string;
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
  shadowColor: string;
  textNormal: string;

  button: ButtonTheme;
  dialog: DialogTheme;
  menu: MenuTheme;
  progress: ProgressTheme;
  textField: TextField;
  toggle: ToggleSwitchColors;
}
