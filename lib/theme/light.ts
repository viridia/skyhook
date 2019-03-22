import { Theme } from './Theme';
// import { makeSpread } from './colors';
import { darken, mix } from 'polished';

export const makeLight = (color: string, accent: string): Theme => {
  // const muted = makeSpread(desaturate(0.2, color));
  const textColor = '#222';
  const c1 = darken(0.1, color);
  const c4 = mix(0.7, color, '#fff');
  const c7 = mix(0.2, color, '#fff');
  const c8 = mix(0.1, color, '#fff');
  return {
    pageColor: c8,
    focusColor: c7,
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
    },

    tab: null,
    menu: null,
    dialog: null,
    progress: null,
  }
};
