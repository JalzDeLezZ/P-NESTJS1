import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { User } from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
import { Db } from 'mongodb';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { OrdersService } from './order.service';

@Injectable()
export class UsersService {
  constructor(
    private orderService: OrdersService,
    @Inject('MONGO') private databaseMongo: Db,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  findAll() {
    return this.userModel.find().exec();
  }

  getTasks() {
    const tasksCollection = this.databaseMongo.collection('tasks');
    return tasksCollection.find().toArray();
  }

  async findOne(id: string) {
    return this.userModel.findById(id);
  }

  async getOrdersByUser(userId: string) {
    const user = await this.findOne(userId);
    // const user_id = user._id.toString();
    if (!user) throw new NotFoundException(`User #${userId} not found`);

    const orders_by_user = await this.orderService.findOrdersByUser(userId);

    return {
      date: new Date(),
      user,
      orders: orders_by_user,
    };
  }

  async create(data: CreateUserDto) {
    const newModel = new this.userModel(data);
    const hashPassword = await bcrypt.hash(newModel.password, 10);
    newModel.password = hashPassword;
    return newModel.save();
  }

  async findByEmail(email: string) {
    const user = await this.userModel
      .findOne({ email })
      .select('+password')
      .exec();
    if (!user) {
      throw new NotFoundException(`User #${email} not found`);
    }
    return user;
  }

  update(id: string, changes: UpdateUserDto) {
    return this.userModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
}
