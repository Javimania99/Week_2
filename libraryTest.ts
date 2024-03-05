import { Book } from "./book";
import { Library } from "./library";

let libro1:Book = new Book("Por el bien del imperio", 1232, "9788493914349", "Josep Fontana", "Pasado&Presente");
let libro2:Book = new Book("La zorra y las uvas", 340, "9788412138313", "Sean Carroll", "Pasado&Presente");

let arrayLibros:Book[] = [libro1, libro2];

let libreria:Library = new Library(arrayLibros, "Madrid", "La Casa del Libro");

console.log(libreria.getAddress());
libreria.setAddress("Madrid");

console.log(libreria.getManager());

console.log(libreria.toString());

console.log(`Números de libros disponibles: ${libreria.getNumberOfBooks()}`);
console.log(`Libros disponibles del autor Josep Fontana:\n${libreria.findByAuthor("Josep Fontana")}`);