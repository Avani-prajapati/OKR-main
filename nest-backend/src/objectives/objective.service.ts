import  { Injectable, Body } from '@nestjs/common';
import { ObjectiveDto } from '../dto/objective.dto';
import { ObjectiveType } from '../interface/objective.interface';

@Injectable()
export class ObjectiveService{
    objectives :ObjectiveType[] = [];
    getAllObjectives() {
        return this.objectives;
    }
    createObjective(objectiveDto: ObjectiveDto) {
        this.objectives.push({id:'1',...objectiveDto});
        return {message: 'Objective created successfully'};
    }
}