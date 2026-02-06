import { KeyResultCompletionService } from './key-result-completion.service';
import { Test } from '@nestjs/testing';

describe('KeyResultCompletionService', () => {
  let keyResultCompletionService: KeyResultCompletionService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [KeyResultCompletionService],
    }).compile();
    keyResultCompletionService = await moduleRef.resolve(
      KeyResultCompletionService,
    );
  });

  describe('isCompleted', () => {
    it('should return true if progress is 100', () => {
      const keyResultCompletionDto = {
        description: 'Test Key Result',
        progress: 100,
      };
      const result = keyResultCompletionService.isCompleted(
        keyResultCompletionDto,
      );
      expect(result).toBeTruthy();
    });

    it('should return false if progress is less than 100', () => {
      const keyResultCompletionDto = {
        description: 'Test Key Result',
        progress: 60,
      };
      const result = keyResultCompletionService.isCompleted(
        keyResultCompletionDto,
      );
      expect(result).toBeFalsy();
    });
  });
});
