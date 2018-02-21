import { Characters } from "./charachters";
import { Subject } from "rxjs/Subject";

export class ListService{

  [x: string]: any;
    getCharactersList() : Characters[] {

        let items: Characters[] = [];

        items.push(new Characters("", "", 30));
        items.push(new Characters("Manga"));
        items.push(new Characters("Disney","pluto"));
        items.push(new Characters("Disney","pippo",30));

        return items;
    }
    

    
        private sectionSelected: Subject<string> = new Subject<string>();
    
        public sectionSelected$ = this.sectionSelected.asObservable();
    
        public setSelection(id : string){
            this.sectionSelected.next(id);
        }
    
    

}