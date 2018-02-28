import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'atoLetter'
})
export class AtoLetterPipe implements PipeTransform {

  transform(value: any, args : string): any {

    return value.replace('A',args);

  }

}
