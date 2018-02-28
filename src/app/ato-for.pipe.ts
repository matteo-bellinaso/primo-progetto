import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'atoFor'
})
export class AtoForPipe implements PipeTransform {

  transform(value: any): any {

    return value.replace('A','4');
    
  }

}
