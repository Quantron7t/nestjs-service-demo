import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { RequestInterceptor } from './interceptor/request.interceptor';
import { AppService } from './services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseInterceptors(RequestInterceptor)//adding interceptor at method level
  getUser(): string {
    return this.appService.getCurrentUser();
  }
}
