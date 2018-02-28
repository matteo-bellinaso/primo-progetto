import { Component, OnInit } from '@angular/core';
import { menuItem } from './menuItem';

import { ListService } from '../list.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private listService : ListService) { }

  ngOnInit() {
  }

  menuItems : menuItem[]= [
    new menuItem("dove","dove"),
    new menuItem("list","list"),
    new menuItem("home", "Home")

  ]

  /*selectSection(id: string){
    this.menuItems.forEach(item => {
      if(id == item.id){
        item.selected = true;
      }else{
        item.selected = false;
      }
    });
    this.listService.setSelection(id);
  }*/

}
