import { ConfigModule, ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { DynamicModule } from './dynamic/dynamic.module';

describe('AppController', () => {
  let appController: AppController;
  let configService: ConfigService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot(), DynamicModule],
      controllers: [AppController],
      providers: [ConfigService],
    }).compile();

    appController = app.get<AppController>(AppController);
    configService = app.get<ConfigService>(ConfigService);
  });

  describe('root', () => {
    it('should return correct message for correct class', () => {
      switch (configService.get('DYNAMIC_CLASS')) {
        case 'alpha':
          expect(appController.getMessage()).toBe('alpha');
          break;

        case 'beta':
          expect(appController.getMessage()).toBe('beta');
          break;

        default:
          throw new Error('invalid dynamic class name');
      }
    });
  });
});
