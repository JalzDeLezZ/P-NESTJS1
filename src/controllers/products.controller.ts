import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products: limit => ${limit} offset => ${offset} brand => ${brand}`;
  }
  // http://127.0.0.1:3000/products?limit=50&offset=12&brand=xyz

  @Get('filter')
  getProductFilter() {
    return `yo soy un filter`;
  }
  // http://127.0.0.1:3000/products/filter

  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }
  // http://127.0.0.1:3000/products/one
}
