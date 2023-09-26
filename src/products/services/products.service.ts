import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './../entities/product.entity';
import {
  CreateProductDto,
  UpdateProductDto,
  FilterProductsDto,
} from './../dtos/products.dtos';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async findAll(params?: FilterProductsDto) {
    if (params) {
      const { limit, offset } = params;
      return await this.productModel
        .find()
        .skip(offset * limit)
        .limit(limit)
        .exec();
    }
    return await this.productModel.find().exec();
  }

  async findOne(_id: string) {
    try {
      const product = await this.productModel.findById(_id).exec();
      if (!product) {
        throw new NotFoundException(`Product #${_id} not found`);
      }
      return product;
    } catch (error) {
      throw new NotFoundException(`ERROR: ${error}`);
    }
  }

  create(data: CreateProductDto) {
    const newProduct = new this.productModel(data);
    return newProduct.save();
  }
  async update(id: string, changes: UpdateProductDto) {
    try {
      const product = await this.productModel
        .findByIdAndUpdate(
          id,
          {
            $set: changes,
          },
          {
            new: true,
          },
        )
        .exec();
      if (!product) {
        throw new NotFoundException(`Product #${id} not found`);
      }
      return product;
    } catch (error) {
      throw new NotFoundException(`ERROR: ${error}`);
    }
  }

  async remove(id: string) {
    try {
      const product = await this.productModel.findByIdAndRemove(id);
      if (!product) {
        throw new NotFoundException(`Product #${id} not found`);
      }
      return product;
    } catch (error) {
      throw new NotFoundException(`ERROR: ${error}`);
    }
  }
}
