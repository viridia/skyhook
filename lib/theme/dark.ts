import { Theme } from './Theme';
import { darken, lighten, mix, transparentize, desaturate } from 'polished';

export const makeDark = (color: string, accent: string): Theme => {
  const textColor = '#fff';
  const darker = mix(0.8, color, '#000');
  const shadow = transparentize(0.5, darker);
  const c0 = lighten(0.05, color);
  const c1 = lighten(0.1, color);
  const c2 = lighten(0.15, color);
  const c3 = lighten(0.2, color);
  // const c5 = lighten(0.4, color);
  const c8 = mix(0.2, color, '#fff');
  const c9 = mix(0.1, color, '#fff');
  return {
    pageColor: color,
    focusColor: c1,
    textNormal: textColor,
    shadowColor: shadow,

    button: {
      default: {
        bgColor: c0,
        textColor: c9,
        borderColor: c1,
      },
      primary: {
        bgColor: c1,
        textColor: c9,
      },
      action: {
        bgColor: accent,
        textColor: c9,
      },
      radio: {
        bgColor: c0,
        textColor: c8,
        borderColor: c3,
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
    },

    progress: {
      trackColor: darker,
      thumbColor: c2,
      textColor: textColor,
    },

    toggle: {
      slideColor: '#000',
      thumbColor: desaturate(0.2, c3),
      checkedSlideColor: c0,
      checkedThumbColor: c8,
    },
  }
};
