import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'append' })
export class AppendPipe implements PipeTransform {
  transform(value: string, args?: any) {
    if (args === 'name') {
      return 'Name: ' + value;
    }
    if (args === 'city') {
      return 'City: ' + value;
    }
    return value;
  }
}
