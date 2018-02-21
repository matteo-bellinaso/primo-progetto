import { Characters } from "./charachters";
import { Subject } from "rxjs/Subject";

export class ListService{


private items : Characters[] = [

    new Characters(0,"", "", 30),
    new Characters(1,"Manga"),
   new Characters(2,"Disney","pluto"),
    new Characters(3,"Disney","pippo",30)

]



    getCharactersList(){

        return this.items;
    }
    

    getCharactersById(id: number){
        for(let char of this.items){
            if(char.id == id){
                return char;
            }
        }
        return null;
    }


        private sectionSelected: Subject<string> = new Subject<string>();
    
        public sectionSelected$ = this.sectionSelected.asObservable();
    
        public setSelection(id : string){
            this.sectionSelected.next(id);
        }
    
    

}