import camelcase from 'camelcase';
import { kebabCase } from './kebab-case';

export function pascalCase(value: string) {
  value = kebabCase(value);
  return camelcase(value, {
    pascalCase: true
  });
}
