import { Injectable } from '@nestjs/common';
import { Model, Connection } from 'mongoose';
import { Book, BookDocument } from './schemas/book.schema.mongoose';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { BookDto } from './dto/book.dto';

@Injectable()
class BooksService {
  constructor(
    @InjectModel(Book.name) private bookModel: Model<BookDocument>,
    @InjectConnection() private connection: Connection,
  ) {}

  public async getBooks(): Promise<BookDocument[]> {
    return this.bookModel.find().exec();
  }

  public async addBook(data: BookDto): Promise<void> {
    const book = new this.bookModel(data);
    await book.save();
  }

  public async updateBook(id: string, data: BookDto): Promise<void> {
    await this.bookModel.findByIdAndUpdate(id, data);
  }

  public async deleteBook(id: string): Promise<void> {
    await this.bookModel.findByIdAndRemove(id);
  }
}

export { BooksService };
