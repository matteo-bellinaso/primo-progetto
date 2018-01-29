import { Characters } from "./charachters";

export class ListService{

    getCharactersList() : Characters[] {

        let items: Characters[] = [];

        items.push(new Characters());
        items.push(new Characters("Manga"));
        items.push(new Characters("Disney","pluto"));
        items.push(new Characters("Disney","pippo",30));
        return items;
    }
    

}