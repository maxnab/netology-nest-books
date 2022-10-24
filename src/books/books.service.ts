import { Injectable } from '@nestjs/common';
import type { Book } from './interfaces/book.interface';

const initialBooks: Book[] = [
  {
    id: '1',
    name: 'War and Peace',
    author: 'Tolstoy',
    pages: 100500,
    price: 100,
    barcode: 'foobarcode',
  },
];

@Injectable()
class BooksService {
  data: Book[] = initialBooks;

  getBooks(): Book[] {
    return this.data;
  }

  addBook(book: Book): void {
    this.data.push(book);
  }

  deleteBook(id: string): void {
    this.data = this.data.filter((book) => book.id !== id);
  }
}

export { BooksService };
