import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { CreateKeyResultDto } from './dto/create-key-result.dto';
import { KeyResultsNotFoundError } from './key-results-not-found-error';
import { KeyResultDuplicateError } from './key-result-duplicate-error';

@Injectable()
export class KeyResultsService {
  constructor(private readonly prismaService: PrismaService) {}
  getAll() {
    return this.prismaService.keyResult.findMany();
  }

  async create(objectiveId: string, createKeyResultDto: CreateKeyResultDto) {
    console.log(createKeyResultDto);
    const keyResult = await this.prismaService.keyResult.findFirst({
      where: { description: createKeyResultDto.description },
    });
    if (keyResult) {
      throw new KeyResultDuplicateError(createKeyResultDto.description);
    }
    return this.prismaService.keyResult.create({
      data: {
        ...createKeyResultDto,
        objective: {
          connect: { id: objectiveId },
        },
      },
    });
  }

  async getByID(keyResultId: string) {
    const keyResult = await this.prismaService.keyResult.findUnique({
      where: { id: keyResultId },
    });
    if (!keyResult) {
      throw new KeyResultsNotFoundError(keyResultId);
    }
    return keyResult;
  }
}
