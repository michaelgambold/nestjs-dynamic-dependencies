import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { DynamicModule } from './dynamic/dynamic.module';

@Module({
  imports: [ConfigModule.forRoot(), DynamicModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
