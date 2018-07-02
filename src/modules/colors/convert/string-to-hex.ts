const hexPattern = /^#?([a-f0-9]{6}|[a-f0-9]{3})/i;

export function stringToHex(value: string): string {

  if (
    typeof value !== 'string' ||
    value.length === 0
  ) {
    return null;
  }

  const hexMatch = value.match(hexPattern);

  if (!hexMatch) {
    return null;
  }

  return `#${hexMatch[1]}`;

}
