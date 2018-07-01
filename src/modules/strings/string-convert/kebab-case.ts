import slug from 'slug';

export function kebabCase(value: string) {
  return slug(value, {
    lower: true
  });
}
