import {
  IsString,
  IsNotEmpty,
  IsPhoneNumber,
  ValidateNested,
  IsArray,
} from 'class-validator';
import { PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class Skills {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  color: string;
}

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly lastName: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  readonly phone: string;

  @IsArray()
  @ValidateNested()
  @Type(() => Skills)
  readonly skills: Skills[]; // Array<Skills>
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
