import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Calendar } from '../entity/calendar.entity';
import { Repository } from 'typeorm';
import { CalendarProtocol, CreateCalendarProtocol } from 'src/protocols/calendar-protocols';
import { randomUUID } from 'crypto'

@Injectable()
export class CalendarService {
    constructor(@InjectRepository(Calendar) private calendarRepository: Repository<Calendar>){}

    async create({ title, description, date, start_time, end_time } : CreateCalendarProtocol): Promise<CalendarProtocol> {
        console.log('service: ',{title, description, date, start_time, end_time})
        const id = randomUUID();
        const created_at = (new Date(Date.now())).toUTCString()
        const active = true;
        const calendar = new Calendar()
        calendar.title = title;
        calendar.description = description;
        calendar.date = date;
        calendar.start_time = start_time;
        calendar.end_time = end_time;
        calendar.id = id;
        calendar.created_at = created_at;
        calendar.active = active;

        await this.calendarRepository.save(calendar)
        return { id, created_at, active, title, description, date, start_time, end_time }
    }

    async findAll(): Promise<CalendarProtocol[]> {
        return this.calendarRepository.find()
    }
}
