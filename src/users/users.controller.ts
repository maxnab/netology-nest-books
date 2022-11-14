import { Body, Controller, Post } from '@nestjs/common';
import type { Users } from './interfaces/users.interface';
import { UsersService } from '../auth/auth.service';

@Controller()
class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signup')
  public signUp(@Body() user: Users): void {
    this.usersService.signUp(user);
  }

  @Post('/sigin')
  public signIn(@Body() user: Users): void {
    this.usersService.signIn(user.email, user.password);
  }
}

export { UsersController };
