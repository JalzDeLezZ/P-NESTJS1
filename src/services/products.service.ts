import { Injectable } from '@nestjs/common';
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
    return this.fake_products.find((item) => item.id === id);
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
}
