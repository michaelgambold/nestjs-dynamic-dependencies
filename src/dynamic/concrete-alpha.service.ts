import { Injectable } from '@nestjs/common';
import { DynamicBaseService } from './dynamic-base.service';

@Injectable()
export class ConcreteAlphaService extends DynamicBaseService {
  getMessage(): string {
    return 'alpha';
  }
}
