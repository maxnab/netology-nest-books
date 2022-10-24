import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';

@Module({
  imports: [],
  controllers: [BooksController],
  providers: [BooksService],
})
class BooksModule {}

export { BooksModule };
