import {Person} from "./person";

export class Contacts{
    people: Person[];

    constructor(){

        this.people = [];
        
    }

    printCalendar():void{
        this.people.forEach(person => {

            console.log(person);

        })
    }
}