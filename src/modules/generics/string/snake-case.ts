import slug from 'slug';

export function snakeCase(value: string) {
  return slug(value, {
    replacement: '_',
    lower: true
  });
}
