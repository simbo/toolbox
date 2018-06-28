export function intlNumberFormatFilter(
  val: number|string,
  options: Intl.NumberFormatOptions
): string {
  const value: number = typeof val === 'number' ? val : parseFloat(val);
  return new Intl.NumberFormat(
    undefined,
    options
  ).format(value);
}

