import { Component } from '@angular/core';
import { Characters } from './charachters';
import { ListService } from './list.service';

@Component({
  selector: 'app-root', // è il selettore per chiamare questo componente all'interno del mio template.
  templateUrl: './app.component.html', // indica il percorso dove andare a prendere il template in html
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string ; //= 'first angular app'; serve per cambiare una componente dichiarata, in questo  caso il title, dichiarare sempre il tipo di variabile
  items: Characters[] = []; //in questo modo gli dichiaro che può essere un array di stringhe o numeri.
  value : string;
  CharacterSelected: Characters;// variabile legata al nostro HTML
  
  constructor(private ListService: ListService){
    this.title = 'hello first app';
    
    this.items = this.ListService.getCharactersList();
    //in questo modo ci pensa il providers a istanziare il charachters
    
  }
showValue(){
  alert("dice: " + this.value);
  this.value = "";
}


showChar(item:Characters){ // creo metodo che prende l'oggetto che è stato cliccato da selectItem

this.CharacterSelected = item;


}

}