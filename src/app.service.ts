import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    @Inject('API_KEY') private readonly apiKey: string,
    @Inject('GLOBAL_VALUE') private readonly globalValue: string,
    @Inject('TASKS') private tasks: TestTask[],
    private configService: ConfigService,
  ) {}
  getHello(): string {
    const env = this.configService.get<string>('DATABASE_NAME');
    const env_key = this.configService.get<string>('API_KEY');
    const inject_keys = this.apiKey;
    const keys = { env_key, inject_keys };
    const message = `Hello World! ${this.globalValue} :: Database: ${env}`;
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
