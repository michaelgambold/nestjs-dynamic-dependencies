import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ConcreteAlphaService } from './concrete-alpha.service';
import { ConcreteBetaService } from './concrete-beta.service';
import { DynamicBaseService } from './dynamic-base.service';

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: DynamicBaseService,
      useFactory: (configService: ConfigService) => {
        switch (configService.get('DYNAMIC_CLASS')) {
          case 'alpha':
            return new ConcreteAlphaService();

          case 'beta':
            return new ConcreteBetaService();

          default:
            throw new Error('Unknown dynamic classs type');
        }
      },
      inject: [ConfigService],
    },
  ],
  exports: [DynamicBaseService],
})
export class DynamicModule {}
