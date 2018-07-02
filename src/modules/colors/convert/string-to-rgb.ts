const rgbPattern =
  /^(rgba?\()?(([0-9]+)(,|;|\s))\s*(([0-9]+)(,|;\s))\s*([0-9]+)/i;

export function stringToRgb(value: string): number[] {

  if (
    typeof value !== 'string' ||
    value.length === 0
  ) {
    return null;
  }

  const rgbMatch = value.match(rgbPattern);

  if (!rgbMatch) {
    return null;
  }

  const rgb = [
    Math.min(255, parseInt(rgbMatch[3], 10)),
    Math.min(255, parseInt(rgbMatch[6], 10)),
    Math.min(255, parseInt(rgbMatch[8], 10))
  ];

  return rgb;

}
