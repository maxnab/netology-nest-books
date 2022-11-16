import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { BooksModule } from 'src/books/books.module';
import { BooksService } from 'src/books/books.service';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  const booksService = { find: () => ['test'], create: (f) => f };
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [BooksModule],
    })
      .overrideProvider(BooksService)
      .useValue(booksService)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET books)', () => {
    return request(app.getHttpServer())
      .get('/books')
      .expect(200)
      .expect(booksService.find());
  });

  afterAll(async () => {
    await app.close();
  });
});
