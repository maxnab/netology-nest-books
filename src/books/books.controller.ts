import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { BooksService } from './books.service';
import type { Book } from './interfaces/book.interface';
import { BookDto } from './dto/book.dto';

@Controller()
class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getAllBooks(): Book[] {
    return this.booksService.getBooks();
  }

  @Post()
  addNewBook(@Body() book: BookDto): void {
    this.booksService.addBook(book);
  }

  @Delete(':id')
  deleteBook(@Param('id') id: string): void {
    this.booksService.deleteBook(id);
  }
}

export { BooksController };
