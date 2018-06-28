export function roundFilter(val: number|string, decimals: number = 0): number {
  const value: number = typeof val === 'number' ? val : parseFloat(val);
  const multiplier: number = Math.pow(10, decimals);
  return Math.round(multiplier * value) / multiplier;
}
