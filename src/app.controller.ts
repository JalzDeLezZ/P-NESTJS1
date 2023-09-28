import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiKeyGuard } from './auth/guards/api-key.guard';
import { Public } from './auth/decorators/public.decorator';

@UseGuards(ApiKeyGuard)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //! @SetMetadata('isPublic', true) //1st way
  @Public() //! 2nd way
  @Get('test')
  newEndpoint() {
    return 'This is a test';
  }

  //? set as a public route
  @Public()
  @Get('tasks')
  getTasks() {
    return this.appService.getTasks();
  }
}
