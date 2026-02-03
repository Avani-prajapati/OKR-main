import { Injectable } from '@nestjs/common';
import { ObjectiveDto } from './dto/objective.dto';
import { ObjectiveType } from './interface/objective.interface';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ObjectiveService {
  objectives: ObjectiveType[] = [];
  constructor(private readonly PrismaService: PrismaService) {}

  getAll() {
    return this.PrismaService.objective.findMany();
  }
  create(objectiveDto: ObjectiveDto) {
    return this.PrismaService.objective.create({ data: objectiveDto });
  }

  delete(id: string) {
    return this.PrismaService.objective.delete({ where: { id } });
  }

  update(id: string, objectiveDto: ObjectiveDto) {
    return this.PrismaService.objective.update({
      where: { id },
      data: objectiveDto,
    });
  }
}
