import { Theme } from './Theme';
import { darken, lighten, mix, transparentize } from 'polished';

export const makeDark = (color: string, accent: string): Theme => {
  const textColor = '#fff';
  const darker = mix(0.8, color, '#000');
  const shadow = transparentize(0.7, darker);
  const c0 = lighten(0.05, color);
  const c1 = lighten(0.1, color);
  const c2 = lighten(0.15, color);
  // const c5 = lighten(0.4, color);
  // const c8 = mix(0.2, color, '#fff');
  const c9 = mix(0.1, color, '#fff');
  return {
    pageColor: color,
    focusColor: c1,
    textNormal: textColor,
    button: {
      default: {
        bgColor: c0,
        textColor: c9,
        borderColor: lighten(0.1, color),
      },
      primary: {
        bgColor: c1,
        textColor: c9,
      },
      action: {
        bgColor: accent,
        textColor: c9,
      },
    },

    textField: {
      bgColor: darken(0.05, color),
      borderColor: c1,
      textColor: c9,
    },

    menu: {
      bgColor: c0,
      textColor: textColor,
      borderColor: darker,
      focusBgColor: c1,
      focusTextColor: textColor,
      hoverBgColor: c2,
      hoverTextColor: textColor,
      dividerColor: darker,
    },

    dialog: {
      backdropColor: c1,
      bgColor: color,
      borderColor: darker,
      headerBgColor: c0,
      headerTextColor: textColor,
      shadowColor: shadow,
    },

    progress: {
      trackColor: darker,
      thumbColor: c2,
      textColor: textColor,
    },
  }
};
