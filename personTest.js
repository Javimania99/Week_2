let myClassLib = require("./person");

let hobbies = ["Programar","Leer","Dibujar",];
let persona = new myClassLib.Person('Javier','Noain',77,173,'Española',1999,hobbies);

let imc = persona.calcIMC();
console.log(`El IMC de ${persona.name} es ${imc}`);

let edad = persona.calcAge();
console.log(`${persona.name} tiene ${edad} años.`);

persona.printAll();

persona.printHobbies();