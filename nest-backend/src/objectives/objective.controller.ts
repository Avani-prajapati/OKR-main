import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseFilters,
} from '@nestjs/common';
import { ObjectiveService } from './objective.service';
import { ObjectiveDto } from './dto/objective.dto';
import { type ObjectiveType } from './interface/objective.interface';
import { CapitalizePipePipe } from '../capitalize-pipe/capitalize-pipe.pipe';
import { ObjectiveNotFoundFilter } from './objective-not-found-filter';
@UseFilters(ObjectiveNotFoundFilter)
@Controller()
export class ObjectiveController {
  constructor(private readonly objectiveService: ObjectiveService) {
    this.objectiveService = objectiveService;
  }
  @Get()
  getAll(@Query('title') title: string) {
    return this.objectiveService.getAll(title);
  }

  @Get(':objectiveId')
  getbyId(@Param('objectiveId') objectiveId: string) {
    return this.objectiveService.getByID(objectiveId);
  }
  @Post()
  create(@Body(new CapitalizePipePipe()) objectiveDto: ObjectiveDto) {
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
