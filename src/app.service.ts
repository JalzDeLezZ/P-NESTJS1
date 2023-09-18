import { Injectable, Inject } from '@nestjs/common';
import { /* ConfigService, */ ConfigType } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {
  constructor(
    // private configService: ConfigService,
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
    @Inject('API_KEY') private readonly apiKey: string,
    @Inject('GLOBAL_VALUE') private readonly globalValue: string,
    @Inject('TASKS') private tasks: TestTask[],
  ) {}
  getHello(): string {
    // const env = this.configService.get<string>('DATABASE_NAME');
    // const env_key = this.configService.get<string>('API_KEY');
    const env_db = this.configService.database.name;
    const env_key = this.configService.apiKey;
    const inject_keys = this.apiKey;
    const keys = { env_key, inject_keys };
    const message = `Hello World! ${this.globalValue} :: Database: ${env_db}`;
    const tasks = this.tasks;
    return JSON.stringify({ keys, message, tasks });
  }
}

export interface TestTask {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
