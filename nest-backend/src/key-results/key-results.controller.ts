import { Controller, Get } from '@nestjs/common';
import { KeyResultsService } from './key-results.service';

@Controller('key-results')
export class KeyResultsController {
  constructor(private readonly keyResultsService: KeyResultsService) {
    this.keyResultsService = keyResultsService;
  }

  @Get()
  getAllKeyResults() {
    return this.keyResultsService.getAllKeyResults();
  }
}
