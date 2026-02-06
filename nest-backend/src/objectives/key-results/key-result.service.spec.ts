import { KeyResultsService } from './key-results.service';
import { Test } from '@nestjs/testing';
import { PrismaService } from '../../prisma.service';
import { ConfigModule } from '@nestjs/config';
import { KeyResult } from './interface/key-result.interface';
import { KeyResultDto } from './dto/key-result.dto';
import { KeyResultsNotFoundError } from './key-results-not-found-error';

describe('KeyResultsService', () => {
  let keyResultsService: KeyResultsService;
  // let prismaService: PrismaService;
  const mockPrismaService = {
    keyResult: {
      findMany: jest.fn(),
      create: jest.fn(),
      findUnique: jest.fn(),
    },
  };

  beforeEach(async () => {
    jest.clearAllMocks();
    const module = await Test.createTestingModule({
      imports: [
        await ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: '.env.test',
        }),
      ],
      providers: [
        KeyResultsService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();
    keyResultsService = await module.resolve(KeyResultsService);
  });
  describe('getAll', () => {
    // it('returns all key results from the database', async () => {
    //   await prismaService.keyResult.deleteMany({});
    //   await prismaService.objective.deleteMany({});
    //
    //   const objective = {
    //     title: 'Backend',
    //   };
    //   const createdObjective = await prismaService.objective.create({
    //     data: objective,
    //   });
    //
    //   const keyResult = {
    //     description: 'Nest',
    //     progress: 90,
    //     objectiveId: createdObjective.id,
    //   };
    //   const createdKeyResult = await prismaService.keyResult.create({
    //     data: keyResult,
    //   });
    //
    //   const response = await keyResultsService.getAll();
    //
    //   expect(response).toEqual([createdKeyResult]);
    // });
    it('should return all key results from the database', async () => {
      const mockKeyResults: KeyResult[] = [
        {
          id: '1',
          description: 'Key Result 1',
          progress: 50,
          isCompleted: false,
          objectiveId: '1',
        },
        {
          id: '2',
          description: 'Key Result 2',
          progress: 75,
          isCompleted: false,
          objectiveId: '1',
        },
      ];
      mockPrismaService.keyResult.findMany.mockResolvedValue(mockKeyResults);
      const result = await keyResultsService.getAll();
      expect(result).toBe(mockKeyResults);
      expect(mockPrismaService.keyResult.findMany).toHaveBeenCalledTimes(1);
    });
  });
  describe('createKeyResultById', () => {
    it('should return a key result on create', async () => {
      const mockKeyResultDto: KeyResultDto = {
        description: 'Key Result 1',
        progress: 50,
      };

      const mockObjectiveId = '1';
      const mockCreatedKeyResult: KeyResult = {
        id: '1',
        description: mockKeyResultDto.description,
        progress: mockKeyResultDto.progress,
        isCompleted: false,
        objectiveId: mockObjectiveId,
      };
      mockPrismaService.keyResult.create.mockResolvedValue(
        mockCreatedKeyResult,
      );

      const result = await keyResultsService.create(
        mockObjectiveId,
        mockKeyResultDto,
      );
      expect(result).toBe(mockCreatedKeyResult);
      expect(mockPrismaService.keyResult.create).toHaveBeenCalledTimes(1);
    });
  });
  describe('getKeyResultByID', () => {
    it('should return a key-result by id ', async () => {
      const mockKeyResultId = '1';
      const mockKeyResult = {
        id: '1',
        description: 'key result 1',
        progress: 40,
        isCompleted: false,
        objectiveId: 2,
      };

      mockPrismaService.keyResult.findUnique.mockResolvedValue(mockKeyResult);
      const result = await keyResultsService.getByID(mockKeyResultId);

      expect(result).toBe(mockKeyResult);
      expect(mockPrismaService.keyResult.findUnique).toHaveBeenCalledTimes(1);
    });
    it('should throw KeyResultNotFoundError when key-result is not   ', async () => {
      const mockKeyResultId = '2';

      mockPrismaService.keyResult.findUnique.mockResolvedValue(undefined);
      await expect(async () => {
        await keyResultsService.getByID(mockKeyResultId);
      }).rejects.toThrow(new KeyResultsNotFoundError(mockKeyResultId));
      expect(mockPrismaService.keyResult.findUnique).toHaveBeenCalledTimes(1);
    });
  });
});
