import { Injectable } from '@nestjs/common';
import { ObjectiveDto } from '../dto/objective.dto';
import { ObjectiveType } from '../interface/objective.interface';
import { Pool } from 'pg';

@Injectable()
export class ObjectiveService {
  objectives: ObjectiveType[] = [];
  private pool: Pool;
  constructor() {
    this.pool = new Pool({
      user: 'postgres',
      host: 'localhost',
      database: 'okrs',
      password: 'postgres',
      port: 5432,
    });
  }
  getAllObjectives() {
    return this.pool.query('SELECT * FROM objectives');
  }
  createObjective(objectiveDto: ObjectiveDto) {
    return this.pool.query(
      `INSERT INTO objectives (title) VALUES (${objectiveDto.objective})`,
    );
  }
}
