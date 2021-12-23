import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/reimbursement/v1/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return 'Hello World!';
  }
}
