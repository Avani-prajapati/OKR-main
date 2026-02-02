import {Body, Controller, Get, Post} from '@nestjs/common';
import {ObjectiveService} from "./objective.service";
import {ObjectiveDto} from "../dto/objective.dto";

@Controller('objectives')
export class ObjectiveController {
    constructor(private readonly objectiveService: ObjectiveService ) {
        this.objectiveService = objectiveService;
    }
    @Get()
    getAllObjectives() {
      return this.objectiveService.getAllObjectives();
    }

    @Post()
    createObjective(@Body() objectiveDto: ObjectiveDto) {
      return this.objectiveService.createObjective(objectiveDto);
    }
}