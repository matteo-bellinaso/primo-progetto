import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Characters } from '../charachters';



@Component({
  selector: 'list', // è il selettore per chiamare questo componente all'interno del mio template.
  templateUrl: './list.component.html' // indica il percorso dove andare a prendere il template in html
  
})
export class ListComponent {
    @Input()
    items : Characters[];


    @Output()
    itemSelectedChange = new EventEmitter<Characters>();

    selectItem(item: Characters){  // creo metodo che restituisce oggetto cliccato.

      this.itemSelectedChange.emit(item);
    }

}


