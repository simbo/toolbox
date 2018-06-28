import { snakeCase } from '../strings/snake-case';

export function snakeCaseFilter(value: string): string {
  return snakeCase(value);
}
