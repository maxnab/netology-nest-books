import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

type BookDocument = Book & Document;

@Schema()
class Book {
  @Prop({ required: true })
  public name: string;

  @Prop({ required: true })
  public author: string;

  @Prop({ required: true })
  public pages: number;

  @Prop({ required: true })
  public price: number;

  @Prop({ required: true })
  public barcode: string;
}

const BookSchema = SchemaFactory.createForClass(Book);

export { Book, BookSchema };
export type { BookDocument };
