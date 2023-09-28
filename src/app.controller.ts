import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiKeyGuard } from './auth/guards/api-key.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(ApiKeyGuard)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('test')
  newEndpoint() {
    return 'This is a test';
  }

  @Get('tasks')
  getTasks() {
    return this.appService.getTasks();
  }
}
