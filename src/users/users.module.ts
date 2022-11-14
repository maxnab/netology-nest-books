import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from 'src/users/constants';
import { UsersDB, UsersDBSchema } from './schemas/users.schema';
import { UsersController } from './users.controller';
import { UsersService } from '../auth/auth.service';

@Module({
  imports: [
    PassportModule,
    MongooseModule.forFeature([{ name: UsersDB.name, schema: UsersDBSchema }]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
class UsersModule {}

export { UsersModule };
