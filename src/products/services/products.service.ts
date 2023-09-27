import { Model, FilterQuery } from 'mongoose';
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
    // http://localhost:3000/products?limit=3&offset=1
    const { limit = 5, offset = 0 } = params;

    const filters: FilterQuery<Product> = {};

    // http://localhost:3000/products?minPrice=2000&maxPrice=5000
    if (params.minPrice && params.maxPrice) {
      filters.price = { $gte: params.minPrice, $lte: params.maxPrice };
      return this.productModel.find(filters).skip(offset).limit(limit).exec();
    }

    const [total, products] = await Promise.all([
      this.productModel.countDocuments(),
      this.productModel
        .find()
        .skip(offset * limit)
        .limit(limit)
        .exec(),
    ]);

    return { total, products };
  }

  async findOne(_id: string) {
    try {
      const product = await this.productModel
        .findById(_id)
        .populate('brand')
        .exec();
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
