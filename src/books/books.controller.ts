import {
  Controller,
  Body,
  Param,
  Get,
  Post,
  Delete,
  Put,
  UsePipes,
  UseFilters,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { BookDto } from './dto/book.dto';
import { FailExceptionFilter } from './filters/fail.exeption.filter';
import { PagesValidationPipe } from './pipes/books.pages.validation.pipe';
import { JoiValidationPipe } from './pipes/joi.validation.pipe';
import { joiBookSchema } from './schemas/book.schema.joi';
import { BookDocument } from './schemas/book.schema.mongoose';

@UseFilters(new FailExceptionFilter())
@Controller()
class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  public getAllBooks(): Promise<BookDocument[]> {
    return this.booksService.getBooks();
  }

  @Post()
  @UsePipes(new JoiValidationPipe(joiBookSchema))
  public addNewBook(@Body() book: BookDto): void {
    this.booksService.addBook(book);
  }

  @Put(':id')
  public update(
    @Param('id') id: string,
    @Body(PagesValidationPipe) body: BookDto,
  ): void {
    this.booksService.updateBook(id, body);
  }

  @Delete(':id')
  public deleteBook(@Param('id') id: string): void {
    this.booksService.deleteBook(id);
  }
}

export { BooksController };
