let classPerson = require("./person");
let classContacts = require("./contacts");

let contacto1 = new classPerson.Person("Javi","Noain",77,173,"Española",1999,["Dibujar","Programar"]);
let contacto2 = new classPerson.Person("Super","Chero",90,193,"Estadounidense",1938,["Volar","Periodismo"]);

let contactos = new classContacts.Contacts();
contactos.arrPersons = [contacto1,contacto2];
contactos.printPersons();