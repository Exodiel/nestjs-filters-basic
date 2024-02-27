/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Res,
  // UsePipes,
  // ValidationPipe
} from '@nestjs/common';
import { AppService } from '../services/app.service';
import { CreateUserDto } from 'src/core/dto/user.dto';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('user')
  // @UsePipes(new ValidationPipe({ transform: true }))
  createUser(@Body() createUserDto: CreateUserDto, @Res() response: Response) {
    const user = this.appService.createUser(createUserDto);
    return response.status(HttpStatus.CREATED).json({ user })
  }
}
