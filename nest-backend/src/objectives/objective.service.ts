import { Injectable } from '@nestjs/common';
import { ObjectiveDto } from './dto/objective.dto';
import { ObjectiveType } from './interface/objective.interface';
import { PrismaService } from '../prisma.service';
import { ObjectiveNotFoundError } from './objective-not-found-error';

@Injectable()
export class ObjectiveService {
  objectives: ObjectiveType[] = [];
  constructor(private readonly PrismaService: PrismaService) {}

  getAll(title: string) {
    return this.PrismaService.objective.findMany({
      where: {
        title: {
          startsWith: title,
          mode: 'insensitive',
        },
      },
      include: {
        keyResults: true,
      },
    });
  }
  create(objectiveDto: ObjectiveDto) {
    return this.PrismaService.objective.create({ data: objectiveDto });
  }

  async delete(id: string) {
    const objective = await this.PrismaService.objective.findUnique({
      where: { id },
    });
    if (!objective) {
      throw new ObjectiveNotFoundError(id);
    }
    return this.PrismaService.objective.delete({
      where: { id },
    });
  }

  update(id: string, objectiveDto: ObjectiveDto) {
    return this.PrismaService.objective.update({
      where: { id },
      data: objectiveDto,
    });
  }

  async getByID(objectiveId: string) {
    const objective = await this.PrismaService.objective.findUnique({
      where: { id: objectiveId },
      include: { keyResults: true },
    });
    if (!objective) {
      throw new ObjectiveNotFoundError(objectiveId);
    }
    return objective;
  }
}
