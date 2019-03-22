import { Theme } from './Theme';
import { darken, lighten, mix } from 'polished';

export const makeDark = (color: string, accent: string): Theme => {
  const c0 = lighten(0.05, color);
  const c1 = lighten(0.1, color);
  const c9 = mix(0.1, color, '#fff');
  return {
    pageColor: color,
    focusColor: c1,
    textNormal: c9,
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

    tab: null,
    menu: null,
    dialog: null,
    progress: null,
  }
};
