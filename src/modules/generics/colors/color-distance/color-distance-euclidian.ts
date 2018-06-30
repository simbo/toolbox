export function colorDistanceEuclidian(colorA: number[], colorB: number[]): number {
  return Math.sqrt(
    Math.pow(colorA[0] - colorB[0], 2) +
    Math.pow(colorA[1] - colorB[1], 2) +
    Math.pow(colorA[2] - colorB[2], 2)
  );
}
