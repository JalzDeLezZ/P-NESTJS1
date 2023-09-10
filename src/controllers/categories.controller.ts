import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':id/products/:productId')
  getCategories(
    @Param('productId') productId: string,
    @Param('id') id: string,
  ) {
    return `product ${productId} and category ${id}`;
  }
  // http://127.0.0.1:3000/categories/1/products/2
}
