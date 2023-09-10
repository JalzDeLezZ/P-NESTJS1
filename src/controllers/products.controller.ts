import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
  Patch,
  HttpStatus,
  HttpCode,
  Res,
} from '@nestjs/common';

import { Response } from 'express';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `products: limit => ${limit} offset => ${offset} brand => ${brand}`,
    };
  }
  // http://127.0.0.1:3000/products?limit=50&offset=12&brand=xyz

  @Get('filter')
  getProductFilter() {
    return `yo soy un filter`;
  }
  // http://127.0.0.1:3000/products/filter

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('productId') productId: string) {
    return {
      message: `product ${productId}`,
    };
  }
  // http://127.0.0.1:3000/products/one

  // With express
  @Get('express/:productId')
  getProductExpress(
    @Res() response: Response,
    @Param('productId') productId: string,
  ) {
    response.status(200).send({
      message: `product ${productId}`,
    });
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion de crear',
      payload,
    };
  }
  // http://localhost:3000/products

  //put update all the fields
  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return `product ${id} deleted`;
  }

  //patch only update the fields that we send
  @Patch(':id')
  patch(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }
}
