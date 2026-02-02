import { Module } from '@nestjs/common';
import { KeyResultsModule } from './key-results/key-results.module';
import { OkrModule } from './okr/okr.module';
import { ObjectiveModule } from './objectives/objective.module';

@Module({
  imports: [OkrModule, KeyResultsModule, ObjectiveModule],
})
export class AppModule {}
