import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';
import { RouterModule } from '@nestjs/core';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [
    CommentsModule,
    BooksModule,
    UsersModule,
    AuthModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_CONNECTION),
    RouterModule.register([
      {
        path: 'books',
        module: BooksModule,
      },
      {
        path: 'users',
        module: UsersModule,
      },
      {
        path: 'comments',
        module: CommentsModule,
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
class AppModule {}

export { AppModule };
