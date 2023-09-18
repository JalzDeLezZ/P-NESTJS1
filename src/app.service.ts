import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    @Inject('API_KEY') private readonly apiKey: string,
    @Inject('TASKS') private tasks: TestTask[],
  ) {}
  getHello(): string {
    const message = `Hello World! ${this.apiKey}`;
    const tasks = this.tasks;
    return JSON.stringify({ message, tasks });
  }
}

export interface TestTask {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
