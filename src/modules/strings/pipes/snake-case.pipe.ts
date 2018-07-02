import { Pipe, PipeTransform } from '@angular/core';

import { snakeCase } from '../convert/snake-case';

@Pipe({
  name: 'snakeCase'
})
export class SnakeCasePipe implements PipeTransform {

  transform(value: string, args?: any): string {
    return snakeCase(value);
  }

}
