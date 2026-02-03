import { Injectable } from '@nestjs/common';

@Injectable()
export class KeyResultsService {
  getAllKeyResults() {
    return { message: 'Get all key results from service' };
  }
}
