import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  UseInterceptors,
  Query,
  // UseInterceptors,
  // ClassSerializerInterceptor,
} from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

import { UsersService } from '../services/users.service';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
import { SanitizeMongooseModelInterceptor } from 'nestjs-mongoose-exclude';

//? 3rd Method for excluding password
@UseInterceptors(
  new SanitizeMongooseModelInterceptor({
    excludeMongooseId: false,
    excludeMongooseV: true,
  }),
)
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @ApiOperation({ summary: 'List of users' })
  findAll() {
    return this.usersService.findAll();
  }
  //? 2nd @UseInterceptors(ClassSerializerInterceptor)
  // async findAll(): Promise<CreateUserDto[]> {
  //   const users = await this.usersService.findAll();
  //   return users.map((user) => user.toObject()); // Convertir a objeto plano
  // }

  @Get('tasks')
  tasks() {
    return this.usersService.getTasks();
  }
  // GET http://localhost:3000/users/find?email=santiango@mail.com
  @Get('find')
  getByEmail(@Query('email') encodedEmail: string) {
    const email = decodeURIComponent(encodedEmail);
    return this.usersService.findByEmail(email);
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  // GET http://localhost:3000/users/email/santiango%40mail.com
  // @Get('email/:email')
  // getByMail(@Param('email') encodedEmail: string) {
  //   const email = decodeURIComponent(encodedEmail); // Decodifica el valor
  //   return this.usersService.findByEmail(email);
  // }

  @Get(':id/orders')
  getOrders(@Param('id') id: string) {
    return this.usersService.getOrdersByUser(id);
  }

  @Post()
  create(@Body() payload: CreateUserDto) {
    return this.usersService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateUserDto) {
    return this.usersService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
