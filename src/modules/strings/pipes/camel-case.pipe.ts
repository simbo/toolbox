import { Pipe, PipeTransform } from '@angular/core';

import { camelCase } from '../string-convert/camel-case';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: string, args?: any): string {
    return camelCase(value);
  }

}
