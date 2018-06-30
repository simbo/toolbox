import { Pipe, PipeTransform } from '@angular/core';

import { pascalCase } from '../string/pascal-case';

@Pipe({
  name: 'pascalCase'
})
export class PascalCasePipe implements PipeTransform {

  transform(value: string, args?: any): string {
    return pascalCase(value);
  }

}
