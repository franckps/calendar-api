import { Test, TestingModule } from '@nestjs/testing';
import { CalendarController } from './calendar.controller';

describe('CalendarController', () => {
  let controller: CalendarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalendarController],
    }).compile();

    controller = module.get<CalendarController>(CalendarController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(controller.find({ startDate: '2021-12-12', endDate: '2021-12-12' })).toBe('Hello World!');
    });
  });
});
