import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Characters } from '../charachters';
import { ComunicatorService } from '../comunicator.service';



@Component({
  selector: 'list', // è il selettore per chiamare questo componente all'interno del mio template.
  templateUrl: './list.component.html' // indica il percorso dove andare a prendere il template in html
  
})
export class ListComponent {
    @Input()
    items : Characters[];

    //@Output()

    //itemSelectedChange = new EventEmitter<Characters>();

    constructor(private comunicatorService : ComunicatorService ){


    }

    ngOnInit(){
      this.items.push(new Characters());
    }

    selectItem(item: Characters){   //al click di un elemento della lista parte la funzione selectitem

      this.comunicatorService.changeSubject(item);
    
    }

}


