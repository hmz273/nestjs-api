import {
  Controller,
  Get,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('users')
export class UserController {
  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  profile(@Req() req: Request) {
    return req.user;
  }
}
