import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCalendarProtocol } from 'src/protocols/calendar-protocols';
import { CalendarService } from './calendar.service';
@Controller('events')
export class CalendarController {
  constructor(private readonly calendarService: CalendarService) {}

  @Get()
  async findAll(): Promise<any> {
    return this.calendarService.findAll();
  }
  
  @Post()
  async create(@Body() body: CreateCalendarProtocol): Promise<any> {
    console.log('controller: ',{body})
    return this.calendarService.create(body);
  }
}