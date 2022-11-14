import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

type UsersDBDocument = UsersDB & Document;

@Schema()
class UsersDB {
  @Prop({ required: true })
  public email: string;

  @Prop({ required: true })
  public password: string;

  @Prop()
  public firstName: string;

  @Prop()
  public lastName: string;
}

const UsersDBSchema = SchemaFactory.createForClass(UsersDB);

export { UsersDB, UsersDBSchema };
export type { UsersDBDocument };
