import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common/pipes';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //? remove all properties that are not in the DTO
      forbidNonWhitelisted: true, //? throw an error if a property that is not in the DTO is sent
    }),
  ); //? global pipe

  const config = new DocumentBuilder()
    .setTitle('API')
    .setDescription('Store')
    .setVersion('1.0')
    // .addTag('cats')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document);

  app.enableCors();

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
