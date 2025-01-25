import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { signInAuth } from './dto/update-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signUp(@Body() user: CreateAuthDto) {
    return this.authService.signUp(user);
  }

  @Post('signin')
  signIn(@Body() user: signInAuth){
    return this.authService.signIn(user);
  }
}
