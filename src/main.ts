import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common/pipes';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //? remove all properties that are not in the DTO
      forbidNonWhitelisted: true, //? throw an error if a property that is not in the DTO is sent
    }),
  ); //? global pipe
  await app.listen(3000);
}
bootstrap();
