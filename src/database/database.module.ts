import { Global, Module } from '@nestjs/common';

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
  ],
  exports: ['API_KEY', 'GLOBAL_VALUE'],
})
export class DatabaseModule {}
