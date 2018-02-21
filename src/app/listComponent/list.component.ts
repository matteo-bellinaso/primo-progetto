import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Characters } from '../charachters';
import { ComunicatorService } from '../comunicator.service';
import { ListService } from '../list.service';
import { Router} from '@angular/router';



@Component({
  selector: 'list', // è il selettore per chiamare questo componente all'interno del mio template.
  templateUrl: './list.component.html' // indica il percorso dove andare a prendere il template in html
  
})

export class ListComponent {

    items : Characters[];

    //@Output()

    //itemSelectedChange = new EventEmitter<Characters>();

    constructor(private listService : ListService , private router : Router){


    }

    ngOnInit(){
      //this.items.push(new Characters());
      this.items = this.listService.getCharactersList();
    }

    selectItem(item: Characters){   //al click di un elemento della lista parte la funzione selectitem

      this.router.navigate(['/detail/'+item.id]);
    
    }

}


