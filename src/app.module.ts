import { Module } from '@nestjs/common';
import { CalendarModule } from './calendar/calendar.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [CalendarModule, DatabaseModule]
})
export class AppModule {}
