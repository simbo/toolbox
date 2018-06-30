export function colorDistanceSimple(colorA: number[], colorB: number[]): number {
  return (
    Math.abs(colorA[0] - colorB[0]) +
    Math.abs(colorA[1] - colorB[1]) +
    Math.abs(colorA[2] - colorB[2])
  );
}
