import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common';

@Injectable()
export class MyParseIntPipe implements PipeTransform {
  transform(value: string) {
    const val = parseInt(value, 10);
    if (isNaN(val)) {
      throw new BadRequestException(`${value} is not an number`);
    }
    return value;
  }
}