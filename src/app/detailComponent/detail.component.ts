import { Component, OnInit } from '@angular/core';
import { Characters } from '../charachters';
import { ComunicatorService } from '../comunicator.service';
import { Router, ActivatedRoute} from '@angular/router';
import { ListService } from '../list.service';
@Component({
  selector: 'detail', // nome da dichiarare per richiamare la parte nell'app-component
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})



export class DetailComponent  {
  CharacterSelected: Characters;// variabile legata al nostro HTML visibile nella parte detail
  
  /*constructor(private comunicatorService : ComunicatorService ){ 
    //va a prendere il valore passato a mysubject e lo mette in detail

    this.comunicatorService.mySubject$.subscribe( (newValue : Characters) => {

        this.CharacterSelected = newValue;

    });

  }*/

  constructor(private router : ActivatedRoute , private listService : ListService){
    this.router.params.subscribe(params =>{
      //params è il parametro per andare a prendere l'id passato nell'url da list component

      if(params['id'] != '' && params['id'] != null ){ //controlla che il parametro passato non sia nullo o vuoto.
        this.CharacterSelected = this.listService.getCharactersById(params['id']);
      }
    });
  }

}
