// External Dependencies
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import * as Joi from 'joi';
import { MongoClient } from 'mongodb';

// Project dependencies
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { HttpService, HttpModule } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { DatabaseModule } from './database/database.module';
import { enviroments } from './enviroments';
import config from './config';

const uri = 'mongodb://root:example@localhost:27018/?authMechanism=DEFAULT';
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    await client.db('platzi-store').command({ ping: 1 });
    console.log('Connected successfully to server');
    const taskCollection = client.db('platzi-store').collection('tasks');
    const tasks = await taskCollection.find().toArray();
    console.log(tasks);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      isGlobal: true,
      load: [config],
      validationSchema: Joi.object({
        API_KEY: Joi.string().required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
        PORT: Joi.number().required(),
      }),
    }),
    HttpModule,
    UsersModule,
    ProductsModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'TASKS',
      useFactory: async (http: HttpService) => {
        const request = http.get('https://jsonplaceholder.typicode.com/todos');
        const response = await lastValueFrom(request);
        return response.data;
      },
      inject: [HttpService],
    },
  ],
})
export class AppModule {}
