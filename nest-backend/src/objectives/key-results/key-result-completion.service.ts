import {type CreateKeyResultDto } from './dto/create-key-result.dto';

export class KeyResultCompletionService {
  isCompleted(keyResultCompletionDto: CreateKeyResultDto): boolean {
    if (keyResultCompletionDto.progress === 100) {
      return true;
    }
    return false;
  }
}
