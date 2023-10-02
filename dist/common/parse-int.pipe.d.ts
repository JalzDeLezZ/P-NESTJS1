import { PipeTransform } from '@nestjs/common';
export declare class MyParseIntPipe implements PipeTransform {
    transform(value: string): string;
}
