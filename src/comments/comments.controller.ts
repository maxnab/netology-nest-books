import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { IComment } from './interfaces/comment.interface';

@Controller()
class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get()
  public getAllComments(): Promise<IComment[]> {
    return this.commentsService.getComments();
  }

  @Post()
  public addNewComment(@Body() comment: IComment): void {
    this.commentsService.addComment(comment);
  }

  @Put(':id')
  public updateComment(
    @Param('id') id: string,
    @Body() commentData: IComment,
  ): void {
    this.commentsService.updateComment(id, commentData);
  }

  @Delete(':id')
  public deleteComment(@Param('id') id: string): void {
    this.commentsService.deleteComment(id);
  }
}

export { CommentsController };
