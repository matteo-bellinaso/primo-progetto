import { Component, OnInit } from '@angular/core';
import { Characters } from '../charachters';
import { ComunicatorService } from '../comunicator.service';

@Component({
  selector: 'detail', // nome da dichiarare per richiamare la parte nell'app-component
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent  {
  CharacterSelected: Characters;// variabile legata al nostro HTML visibile nella parte detail
  
  


  constructor(private comunicatorService : ComunicatorService ){ 
    //va a prendere il valore passato a mysubject e lo mette in detail

    this.comunicatorService.mySubject$.subscribe( (newValue : Characters) => {

        this.CharacterSelected = newValue;

    });

  }
}
