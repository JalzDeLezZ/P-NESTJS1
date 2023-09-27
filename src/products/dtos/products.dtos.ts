import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsPositive,
  IsOptional,
  Min,
  ValidateIf,
  ValidateNested,
  IsMongoId,
  IsArray,
} from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateCategoryDto } from './category.dtos';

import { Type } from 'class-transformer'; // 👈 transform
import { CreateSubDocDto } from './sub-doc.dtos'; // 👈 import

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'The name of the product' })
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  //! @ApiProperty() //: If UPD partially doen't work, add this property to all variables
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  //? @ApiProperty() ...
  readonly price: number;

  @IsNumber()
  @IsNotEmpty()
  readonly stock: number;

  @IsUrl()
  @IsNotEmpty()
  readonly image: string;

  @IsNotEmpty()
  @ValidateNested()
  readonly category: CreateCategoryDto;

  @IsNotEmpty()
  @IsMongoId()
  readonly brand: string;

  //? 👇 new field (1:1) :: Embedded document
  /* @IsNotEmpty()
  @ValidateNested()
  readonly subDoc: CreateSubDocDto; */

  //? 👇 new field (1:N) :: Embedded document
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateSubDocDto)
  readonly subDocs: CreateSubDocDto[];
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}

export class FilterProductsDto {
  @IsOptional()
  @IsPositive()
  limit: number;

  @IsOptional()
  @Min(0)
  offset: number;

  @IsOptional()
  @Min(0)
  minPrice: number;

  @ValidateIf((item) => item.minPrice)
  @IsPositive()
  maxPrice: number;
}

/*
{
	"name": "Betzabe",
	"description": "♥ ♥ ♥",
	"price": 3000,
	"stock": 100,
	"image": "https://i.imgur.com/U4iGx1j.jpeg",
	"category": {
		"name": "category 1",
		"image": "https://picsum.photos/200"
	},
	"brand": "6512668301f2764339d5ea17",
	"subDocs": [
		{
			"name" : "subdoc 111",
			"description": "dsadf"
		}
	]
}
*/
