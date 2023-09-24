import { MongoClient } from 'mongodb';
import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';

import config from '../config';

const API_KEY = 'KEY11111111';
const API_KEY_PROD = 'PRODKEY1212121SA';
const DATE_TIME = new Date().toISOString();

@Global()
@Module({
  providers: [
    //! Check execution context:: $ NODE_ENV=prod npm run start:dev
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
    {
      provide: 'GLOBAL_VALUE',
      useValue: 'This is a global value' + DATE_TIME,
    },
    {
      provide: 'MONGO',
      useFactory: async (configService: ConfigType<typeof config>) => {
        const { connection, user, password, host, port, dbName } =
          configService.mongo;
        const uri = `${connection}://${user}:${password}@${host}:${port}/?authMechanism=DEFAULT`;
        const client = new MongoClient(uri);
        await client.connect();
        return client.db(dbName);
      },
      inject: [config.KEY],
    },
  ],
  exports: ['API_KEY', 'GLOBAL_VALUE', 'MONGO'],
})
export class DatabaseModule {}
