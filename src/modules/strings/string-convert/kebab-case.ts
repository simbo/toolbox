import slugify from 'slugify';

export function kebabCase(value: string) {
  return slugify(value, {
    lower: true
  });
}
