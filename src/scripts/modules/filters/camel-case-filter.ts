import { camelCase } from '../strings/camel-case';

export function camelCaseFilter(value: string): string {
  return camelCase(value);
}
