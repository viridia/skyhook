/** Theme properties for buttons. */
export interface ButtonTheme {
  bgColor: string;
  textColor: string;
  borderColor?: string;
}

/** Theme properties for progress bars. */
export interface ProgressTheme {
  trackColor: string;
  thumbColor: string;
  textColor: string;
}

/** Theme properties for tabs. */
export interface TabTheme {
  textColor: string;
  bgColor: string;
  borderColor: string;
  activeTextColor: string;
  activeBgColor: string;
  activeBorderColor: string;
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
  activeBgColor: string;
  activeTextColor: string;
  dividerColor: string;
}

/** Combined theme. */
export interface Theme {
  pageColor: string;
  focusColor: string;
  textNormal: string;

  button: {
    default: ButtonTheme;
    action: ButtonTheme;
    primary: ButtonTheme;
  }

  progress: ProgressTheme;
  tab: TabTheme;
  dialog: DialogTheme;
  menu: MenuTheme;
}
