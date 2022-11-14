import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { Book } from './schemas/book.schema.mongoose';

describe('AppController', () => {
  let booksController: BooksController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [
        BooksService,
        {
          provide: getModelToken(Book.name),
          useValue: Model<Book>,
        },
      ],
    }).compile();

    booksController = app.get<BooksController>(BooksController);
  });

  describe('books', () => {
    it('should be defined', () => {
      expect(booksController).toBeDefined();
    }),
      it('should return array', () => {
        expect(Array.isArray(booksController.getAllBooks())).toBeTruthy();
      });
  });
});
