import { ApiTags, ApiOperation } from '@nestjs/swagger';

import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';

import { CreateProductDto, UpdateProductDto } from '../dtos/products.dtos';

import { ProductsService } from './../services/products.service';
import { MongoIdPipe } from 'src/common/mongo-id.pipe';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  @ApiOperation({ summary: 'List of products' })
  async getProducts(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    const products = await this.productsService.findAll();
    return {
      page: offset,
      limit,
      data: products,
    };
  }

  @Get('filter')
  getProductFilter() {
    return `yo soy un filter!!!`;
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('productId', MongoIdPipe) productId: string) {
    return this.productsService.findOne(productId);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', MongoIdPipe) id: string,
    @Body() payload: UpdateProductDto,
  ) {
    return this.productsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', MongoIdPipe) id: string) {
    return this.productsService.remove(id);
  }
}
