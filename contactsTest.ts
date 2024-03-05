import { Person } from "./person";
import { Contacts } from "./contacts";

let persona1:Person = new Person("Peter", 23, "Queens, New York");
let persona2:Person = new Person("Sherlock", 40, "West End, London");

let contactos:Contacts = new Contacts();
contactos.people = [persona1, persona2];
contactos.printCalendar();