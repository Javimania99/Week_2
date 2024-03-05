import { Book } from "./book";

let book:Book = new Book("Viuda de Hierro", 512, "978-84-272-2470-4", "Xiran Jay Zhao", "Molino");

console.log(book.toString());

console.log(book.getTitle());
book.setTitle("Introducción a Javascript");

console.log(book.getNPages());
book.setNPages(233);

console.log(book.getIsbn());
book.setIsbn("2344433-BC23333");

console.log(book.getAuthor());
book.setAuthor("Joseph Smith");

console.log(book.getEditorial());
book.setEditorial("Now Editions");

console.log(book.toString());   