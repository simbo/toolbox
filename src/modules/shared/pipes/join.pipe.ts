import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {

  transform(value: any, glue: string = ''): any {
    console.log(value, glue);
    if (Array.isArray(value)) {
      value = value.join(glue);
    }
    return value;
  }

}
