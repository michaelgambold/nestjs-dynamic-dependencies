import { Controller, Get } from '@nestjs/common';
import { DynamicBaseService } from './dynamic/dynamic-base.service';

@Controller()
export class AppController {
  constructor(private readonly dynamicBaseService: DynamicBaseService) {}

  @Get()
  getMessage(): string {
    return this.dynamicBaseService.getMessage();
  }
}
