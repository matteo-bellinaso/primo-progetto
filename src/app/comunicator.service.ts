import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Characters } from './charachters';


@Injectable()
export class ComunicatorService {

  private mySubject = new Subject<Characters>();

  public mySubject$ = this.mySubject.asObservable();
  
  changeSubject(value: Characters) {  //gli passa il valore cliccato sulla lista, li carica su mySubject
    this.mySubject.next(value);
   }


}
