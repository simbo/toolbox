import camelcase from 'camelcase';
import { kebabCase } from './kebab-case';

export function camelCase(value: string) {
  value = kebabCase(value);
  return camelcase(value);
}
