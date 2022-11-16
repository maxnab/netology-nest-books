import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { CommentsDBSchema, CommentsDB } from './schemas/comment.schema';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { CommentsGateway } from './comments.gateway';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CommentsDB.name, schema: CommentsDBSchema },
    ]),
  ],
  controllers: [CommentsController],
  providers: [CommentsService],
  exports: [CommentsService, CommentsGateway],
})
class CommentsModule {}

export { CommentsModule };
