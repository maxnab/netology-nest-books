import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { IComment } from './interfaces/comment.interface';
import { CommentsDB, CommentsDBDocument } from './schemas/comment.schema';

@Injectable()
class CommentsService {
  constructor(
    @InjectModel(CommentsDB.name)
    private commentsModel: Model<CommentsDBDocument>,
    @InjectConnection() private connection: Connection,
  ) {}

  public async getComments(): Promise<IComment[]> {
    return this.commentsModel.find().exec();
  }

  public async addComment(commentData: IComment): Promise<void> {
    const comment = new this.commentsModel(commentData);
    await comment.save();
  }

  public async updateComment(id: string, commentData: IComment): Promise<void> {
    await this.commentsModel.findByIdAndUpdate(id, commentData);
  }

  public async deleteComment(id: string): Promise<void> {
    await this.commentsModel.findByIdAndRemove(id);
  }
}

export { CommentsService };
