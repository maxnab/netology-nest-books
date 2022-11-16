import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

type CommentsDBDocument = CommentsDB & Document;

@Schema()
class CommentsDB {
  @Prop({ required: true })
  public id: string;

  @Prop({ required: true })
  public bookId: number;

  @Prop()
  public comment: string;
}

const CommentsDBSchema = SchemaFactory.createForClass(CommentsDB);

export { CommentsDB, CommentsDBSchema };
export type { CommentsDBDocument };
