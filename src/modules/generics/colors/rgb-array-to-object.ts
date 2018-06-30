export function rgbArrayToObject(
  color: number[]
): {R: number, G: number, B: number} {
  return {
    R: color[0],
    G: color[1],
    B: color[2]
  };
}
