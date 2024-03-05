import {Person} from "./person";

let persona:Person = new Person("Pati",23,"Madrid, España");
persona.printName();

let date:Date = new Date();
let currentYear:number = date.getFullYear();
console.log(`Edad: ${persona.age}, Año de nacimiento: ${persona.yearOfBirth(currentYear)}`);

console.log(persona.getAddress());
persona.setAddress("Madrid,España");
console.log(persona.getAddress());