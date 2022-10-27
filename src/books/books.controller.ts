import {
  Controller,
  Body,
  Param,
  Get,
  Post,
  Delete,
  Put,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { BookDto } from './dto/book.dto';
import { BookDocument } from './schemas/book.schema';

@Controller()
class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  public getAllBooks(): Promise<BookDocument[]> {
    return this.booksService.getBooks();
  }

  @Post()
  public addNewBook(@Body() book: BookDto): void {
    this.booksService.addBook(book);
  }

  @Put(':id')
  public update(@Param('id') id: string, @Body() body: BookDto): void {
    this.booksService.updateBook(id, body);
  }

  @Delete(':id')
  public deleteBook(@Param('id') id: string): void {
    this.booksService.deleteBook(id);
  }
}

export { BooksController };
