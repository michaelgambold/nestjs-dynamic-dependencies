import { Injectable } from '@nestjs/common';
import { DynamicBaseService } from './dynamic-base.service';

@Injectable()
export class ConcreteBetaService extends DynamicBaseService {
  getMessage(): string {
    return 'beta';
  }
}
