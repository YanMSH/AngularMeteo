import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return value;
    }
    if (typeof value !== 'string') {
      throw new Error('Неправильный тип аргумента на входе в пайп');
    }
    return value[0].toUpperCase() + value.substr(1);
  }

}
