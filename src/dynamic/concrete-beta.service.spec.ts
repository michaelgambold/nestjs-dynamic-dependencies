import { Test, TestingModule } from '@nestjs/testing';
import { ConcreteBetaService } from './concrete-beta.service';

describe('ConcreteBetaService', () => {
  let service: ConcreteBetaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConcreteBetaService],
    }).compile();

    service = module.get<ConcreteBetaService>(ConcreteBetaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return beta as response', () => {
    expect(service.getMessage()).toEqual('beta');
  });
});
