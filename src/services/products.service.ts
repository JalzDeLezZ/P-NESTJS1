import {
  Injectable,
  NotFoundException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Product } from 'src/Entities/product.entity';

@Injectable()
export class ProductsService {
  private counter = 0;
  private fake_products: Array<Product> = [
    {
      id: 0,
      name: 'Product 1',
      description: 'bla bla bla',
      price: 122,
      stock: 12,
      image: 'https://picsum.photos/200/300',
    },
  ];

  findAll() {
    return this.fake_products;
  }

  findOne(id: number) {
    const product = this.fake_products.find((e) => e.id === id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
      // {
      //   "message": "Product #1 not found",
      //   "error": "Not Found",
      //   "statusCode": 404
      // }
    }
    return product;
  }

  create(payload: any) {
    this.counter = this.counter + 1;
    const newProduct = {
      id: this.counter,
      ...payload,
    };
    this.fake_products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: any) {
    const product = this.findOne(id);
    if (product) {
      const index = this.fake_products.findIndex((item) => item.id === id);
      this.fake_products[index] = {
        ...product,
        ...payload,
      };
      return this.fake_products[index];
    }
    return null;
  }

  remove(id: number) {
    const index = this.fake_products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new HttpException(
        `Error no se encontro el producto #${id}`,
        HttpStatus.BAD_REQUEST,
      );
      // {
      //   "statusCode": 400,
      //   "message": "Error no se encontro el producto #0"
      // }
    }
    this.fake_products.splice(index, 1);
    return true;
  }
}
