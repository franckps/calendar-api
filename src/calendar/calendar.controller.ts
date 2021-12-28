import { Body, Controller, Delete, Get, HttpCode, Param, Post } from '@nestjs/common';
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
    return this.calendarService.create(body);
  }
  
  @Delete(':id')
  @HttpCode(204)
  async delete(@Param() { id }: {id: string}): Promise<any> {
    return this.calendarService.delete(id);
  }
}