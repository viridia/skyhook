import { parseToRgb } from 'polished';

/** Polished's 'readableColor' isn't all that readable. */
export function contrastingColor(color: string) {
  const rgb = parseToRgb(color);
  const luminance = (rgb.red * 0.3 + rgb.green * 0.5 + rgb.blue * 0.2) / 255.0;
  return luminance > 0.53 ? 'black' : 'white';
}
