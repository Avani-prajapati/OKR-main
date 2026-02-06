import { Body, Controller, Get, Param, Post, UseFilters } from '@nestjs/common';
import { KeyResultsService } from './key-results.service';
import { CreateKeyResultDto } from './dto/create-key-result.dto';
import { KeyResultsNotFoundFilter } from './key-result-not-found-filter';
import { KeyResultDuplicateFilter } from './key-result-duplicate-filter';
@UseFilters(KeyResultsNotFoundFilter, KeyResultDuplicateFilter)
@Controller('')
export class KeyResultsController {
  constructor(private readonly keyResultsService: KeyResultsService) {
    this.keyResultsService = keyResultsService;
  }

  @Get()
  getAll() {
    return this.keyResultsService.getAll();
  }

  @Get(':keyResultId')
  getById(@Param('keyResultId') keyResultId: string) {
    return this.keyResultsService.getByID(keyResultId);
  }

  @Post()
  create(
    @Param('objectiveId') objectiveId: string,
    @Body() createKeyResultDto: CreateKeyResultDto,
  ) {
    return this.keyResultsService.create(objectiveId, createKeyResultDto);
  }
}
