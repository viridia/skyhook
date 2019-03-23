import { Theme } from './Theme';
import { darken, lighten, mix, transparentize } from 'polished';

export const makeDark = (color: string, accent: string): Theme => {
  const textColor = '#fff';
  const darker = mix(0.8, color, '#000');
  const shadow = transparentize(0.7, darker);
  const c0 = lighten(0.05, color);
  const c1 = lighten(0.1, color);
  // const c2 = lighten(0.2, color);
  const c9 = mix(0.1, color, '#fff');
  return {
    pageColor: color,
    focusColor: c1,
    textNormal: textColor,
    button: {
      default: {
        bgColor: c0,
        textColor: c9,
        borderColor: darken(0.03, color),
      },
      primary: {
        bgColor: c1,
        textColor: c9,
        borderColor: darken(0.03, color),
      },
      action: {
        bgColor: accent,
        textColor: c9,
        borderColor: darken(0.03, color),
      },
    },

    textField: {
      bgColor: darken(0.05, color),
      borderColor: c1,
      textColor: c9,
    },

    tab: null,
    menu: null,
    dialog: {
      backdropColor: c1,
      bgColor: color,
      borderColor: darker,
      headerBgColor: c0,
      headerTextColor: textColor,
      shadowColor: shadow,
    },
    progress: null,
  }
};
