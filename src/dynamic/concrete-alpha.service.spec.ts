import { Test, TestingModule } from '@nestjs/testing';
import { ConcreteAlphaService } from './concrete-alpha.service';

describe('ConcreteAlphaService', () => {
  let service: ConcreteAlphaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConcreteAlphaService],
    }).compile();

    service = module.get<ConcreteAlphaService>(ConcreteAlphaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return alpha as response', () => {
    expect(service.getMessage()).toEqual('alpha');
  });
});
