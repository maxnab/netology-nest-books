import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt.auth.guard';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}
  @Get('/token')
  getToken(): string {
    return this.authService.createToken({ id: 1 });
  }

  @UseGuards(JwtAuthGuard)
  @Post('/login')
  async login(@Request() req) {
    return req.user;
  }
}
