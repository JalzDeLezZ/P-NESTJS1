import { IsString, IsNotEmpty, IsEmail, Length } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @IsEmail()
  @ApiProperty({ description: 'The email of the user' })
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6)
  @ApiProperty({ description: 'The password of the user' })
  readonly password: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'The role of the user' })
  readonly role: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
