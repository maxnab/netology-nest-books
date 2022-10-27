import { Injectable } from '@nestjs/common';
import { Model, Connection } from 'mongoose';
import { Book } from './schemas/book.schema';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { BookDocument } from './schemas/book.schema';
import { BookDto } from './dto/book.dto';

@Injectable()
class BooksService {
  constructor(
    @InjectModel(Book.name) private BookModel: Model<BookDocument>,
    @InjectConnection() private connection: Connection,
  ) {}

  public async getBooks(): Promise<BookDocument[]> {
    return this.BookModel.find().exec();
  }

  public async addBook(data: BookDto): Promise<void> {
    const book = new this.BookModel(data);
    await book.save();
  }

  public async updateBook(id: string, data: BookDto): Promise<void> {
    await this.BookModel.findByIdAndUpdate(id, data);
  }

  public async deleteBook(id: string): Promise<void> {
    await this.BookModel.findByIdAndRemove(id);
  }
}

export { BooksService };
