import { Theme } from './Theme';
import { darken, mix, transparentize, desaturate } from 'polished';

export const makeLight = (color: string, accent: string): Theme => {
  // const muted = makeSpread(desaturate(0.2, color));
  const textColor = '#222';
  const shadow = transparentize(0.6, mix(0.3, color, '#000'));
  const c1 = darken(0.3, color);
  const c2 = darken(0.2, color);
  const c4 = mix(0.7, color, '#fff');
  const c5 = mix(0.4, color, '#fff');
  const c6 = mix(0.3, color, '#fff');
  const c7 = mix(0.2, color, '#fff');
  const c8 = mix(0.1, color, '#fff');
  const c9 = '#fff';
  return {
    pageColor: c8,
    focusColor: c5,
    shadowColor: shadow,
    textNormal: textColor,

    button: {
      default: {
        bgColor: c7,
        textColor: textColor,
        borderColor: darken(0.1, c7),
      },
      primary: {
        bgColor: c4,
        textColor: textColor,
        borderColor: darken(0.1, c4),
      },
      action: {
        bgColor: accent,
        textColor: c8,
        borderColor: darken(0.1, accent),
      },

      roundCorners: true,
    },

    textField: {
      bgColor: '#fff',
      borderColor: c7,
      textColor,
    },

    menu: {
      bgColor: c8,
      textColor: textColor,
      borderColor: c5,
      focusBgColor: c6,
      focusTextColor: textColor,
      hoverBgColor: c5,
      hoverTextColor: textColor,
      dividerColor: c5,
    },

    dialog: {
      backdropColor: c1,
      bgColor: c7,
      borderColor: darken(0.1, c7),
      headerBgColor: c5,
      headerTextColor: textColor,
    },

    progress: {
      trackColor: c6,
      thumbColor: c4,
      textColor: textColor,
    },

    toggle: {
      slideColor: desaturate(0.3, color),
      thumbColor: c9,
      checkedSlideColor: c2,
      checkedThumbColor: mix(0.7, accent, '#fff'),
    },
  }
};
