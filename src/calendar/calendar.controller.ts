import { Controller, Get } from '@nestjs/common';
import { CalendarService } from './calendar.service';
@Controller()
export class CalendarController {
  constructor(private readonly calendarService: CalendarService) {}

  @Get()
  async findAll(): Promise<any> {
    return this.calendarService.findAll();
  }
}