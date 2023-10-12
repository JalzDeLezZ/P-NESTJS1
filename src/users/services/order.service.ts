import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Order } from '../entities/order.entity';
import { CreateOrderDto, UpdateOrderDto } from '../dtos/order.dto';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}

  findAll() {
    return this.orderModel.find().populate('products');
    //! if you want to populate a subdocument, you can do it like this:
    /* return this.orderModel
      .find()
      .populate('productIds')
      .populate({
        path: 'customer',
        populate: {
          path: 'skills',
        },
      })
      .exec(); */
  }

  async findOne(id: string) {
    return this.orderModel.findById(id);
  }

  create(data: CreateOrderDto) {
    if (!data.date) {
      data.date = new Date().toISOString();
    }
    const newModel = new this.orderModel(data);
    return newModel.save();
  }

  update(id: string, changes: UpdateOrderDto) {
    return this.orderModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.orderModel.findByIdAndDelete(id);
  }

  async removeProduct(id: string, productId: string) {
    const order = await this.orderModel.findById(id);

    order.products.pull(productId);

    return order.save();
  }

  async addProducts(id: string, produtcsIds: string[]) {
    const order = await this.orderModel.findById(id);
    produtcsIds.forEach((pid) => {
      order.products.push(pid);
    });
    return order.save();
  }

  async findOrdersByUser(userId: string) {
    return this.orderModel.find({ customer: userId });
  }
}
