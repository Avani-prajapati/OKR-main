import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ObjectiveService } from './objective.service';
import { ObjectiveDto } from './dto/objective.dto';
import { type ObjectiveType } from './interface/objective.interface';

@Controller('objectives')
export class ObjectiveController {
  constructor(private readonly objectiveService: ObjectiveService) {
    this.objectiveService = objectiveService;
  }
  @Get()
  getAll() {
    return this.objectiveService.getAll();
  }

  @Post()
  create(@Body() objectiveDto: ObjectiveDto) {
    return this.objectiveService.create(objectiveDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<ObjectiveType> {
    return this.objectiveService.delete(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() objectiveDto: ObjectiveDto) {
    return this.objectiveService.update(id, objectiveDto);
  }
}
