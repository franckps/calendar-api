import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Calendar } from '../entity/calendar.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CalendarService {
    constructor(@InjectRepository(Calendar) private calendarRepository: Repository<Calendar>){}

    async findAll() {
        return this.calendarRepository.find()
    }
}
