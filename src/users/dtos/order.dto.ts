import {
  IsMongoId,
  IsNotEmpty,
  IsArray,
  ArrayNotEmpty,
  ArrayUnique,
  IsOptional,
  IsDate,
} from 'class-validator';
import { OmitType, PartialType } from '@nestjs/swagger';

/* {
	"customer": "6513b1c5bd4732832ab09ed6",
	"date": "2023-12-12",
	"products": ["6510f131576d75cf0edc224c", "65123896c9b698057f7995df"]
} */

export class CreateOrderDto {
  @IsNotEmpty()
  @IsMongoId()
  readonly customer: string;

  @IsDate()
  @IsOptional()
  date: string;

  @IsArray()
  @ArrayNotEmpty() // Verificar que el array no esté vacío
  @ArrayUnique() // Verificar que los elementos del array sean únicos
  @IsMongoId({ each: true }) // Verificar que cada elemento sea un ID de MongoDB
  readonly products: string[];
}

//* export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
/* {
  "customer": "6513b1c5bd4732832ab09ed6",
  "date": "2023-12-12",
  "products": []
}
 */

export class UpdateOrderDto extends PartialType(
  OmitType(CreateOrderDto, ['products'] as const),
) {}

/* {
  "customer": "6513b1c5bd4732832ab09ed6",
  "date": "2023-12-12"
}
 */

export class AddProductsToOrdersDTO {
  @IsArray()
  @ArrayNotEmpty() // Verificar que el array no esté vacío
  @ArrayUnique() // Verificar que los elementos del array sean únicos
  @IsMongoId({ each: true }) // Verificar que cada elemento sea un ID de MongoDB
  readonly productsIds: string[];
}
