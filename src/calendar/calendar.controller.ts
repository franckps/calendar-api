import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query } from '@nestjs/common';
import { CreateCalendarProtocol, FindCalendarProtocol, UpdateCalendarProtocol } from 'src/protocols/calendar-protocols';
import { CalendarService } from './calendar.service';
@Controller('events')
export class CalendarController {
  constructor(private readonly calendarService: CalendarService) {}

  @Get()
  async find(@Query() query: FindCalendarProtocol): Promise<any> {
    return this.calendarService.find(query);
  }
  
  @Post()
  async create(@Body() body: CreateCalendarProtocol): Promise<any> {
    return this.calendarService.create(body);
  }
  
  @Put(':id')
  @HttpCode(204)
  async update(@Param() { id }: {id: string}, @Body() body: UpdateCalendarProtocol): Promise<any> {
    return this.calendarService.update(id, body);
  }
  
  @Delete(':id')
  @HttpCode(204)
  async delete(@Param() { id }: {id: string}): Promise<any> {
    return this.calendarService.delete(id);
  }
}