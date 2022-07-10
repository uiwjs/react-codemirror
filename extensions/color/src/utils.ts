export function toFullHex(color: string): string[] {
  if (color.length === 4) {
    // 3-char hex
    return [`#${color[1].repeat(2)}${color[2].repeat(2)}${color[3].repeat(2)}`, ''];
  }

  if (color.length === 5) {
    // 4-char hex (alpha)
    return [`#${color[1].repeat(2)}${color[2].repeat(2)}${color[3].repeat(2)}`, color[4].repeat(2)];
  }

  if (color.length === 9) {
    // 8-char hex (alpha)
    return [`#${color.slice(1, -2)}`, color.slice(-2)];
  }

  return [color, ''];
}
/** https://stackoverflow.com/a/5624139/1334703 */
export function rgbToHex(r: number, g: number, b: number) {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

/** https://stackoverflow.com/a/5624139/1334703 */
export function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

/** https://css-tricks.com/converting-color-spaces-in-javascript/#aa-rgb-to-hsl */
export function RGBToHSL(r: number, g: number, b: number) {
  (r /= 255), (g /= 255), (b /= 255);
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h = 0,
    s,
    l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return { h: Math.floor(h * 360), s: Math.floor(s * 100), l: Math.floor(l * 100) };
}
