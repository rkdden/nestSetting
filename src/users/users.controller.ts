import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';

@Controller('api/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers(@Req() req) {
    return req.user;
  }

  @Post()
  postUsers(@Body() data: JoinRequestDto) {
    this.usersService.postUsers(data.eamil, data.nickname, data.password);
  }

  @Post('login')
  logIn(@Req() req) {
    return;
  }
}
