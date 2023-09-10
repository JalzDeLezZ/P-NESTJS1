import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('nuevo')
  newEndpoint() {
    return 'Hola mundo';
  }

  @Get('/ruta/')
  hello() {
    return 'con /sas/';
  }

  @Get('products/filter')
  getProductFilter() {
    return `yo soy un filter`;
  }
  // http://127.0.0.1:3000/products/filter

  @Get('products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }
  // http://127.0.0.1:3000/products/one

  @Get('products')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products: limit => ${limit} offset => ${offset} brand => ${brand}`;
  }
  // http://127.0.0.1:3000/products?limit=50&offset=12&brand=xyz

  @Get('categories/:id/products/:productId')
  getCategories(
    @Param('productId') productId: string,
    @Param('id') id: string,
  ) {
    return `product ${productId} and category ${id}`;
  }
  // http://127.0.0.1:3000/categories/1/products/2
}
