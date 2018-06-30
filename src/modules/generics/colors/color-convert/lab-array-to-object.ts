export function labArrayToObject(
  color: number[]
): {L: number, A: number, B: number} {
  return {
    L: color[0],
    A: color[1],
    B: color[2]
  };
}
