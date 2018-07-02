import { Pipe, PipeTransform } from '@angular/core';

import { kebabCase } from '../../convert/kebab-case';

@Pipe({
  name: 'kebabCase'
})
export class KebabCasePipe implements PipeTransform {

  transform(value: string, args?: any): string {
    return kebabCase(value);
  }

}
