import type { Book } from '../interfaces/book.interface';

class BookDto implements Book {
  author: string;
  barcode: string;
  id: string;
  name: string;
  pages: number;
  price: number;

  constructor(author = '', barcode = '', name = '', pages = 0, price = 1000) {
    this.id = String(Math.random() * 100);
    this.author = author;
    this.barcode = barcode;
    this.name = name;
    this.pages = pages;
    this.price = price;
  }
}

export { BookDto };
