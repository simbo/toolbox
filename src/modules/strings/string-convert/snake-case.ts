import slugify from 'slugify';

export function snakeCase(value: string) {
  return slugify(value, {
    replacement: '_',
    lower: true
  });
}
