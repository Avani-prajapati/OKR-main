import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { ObjectiveDto } from '../objectives/dto/objective.dto';

@Injectable()
export class CapitalizePipePipe implements PipeTransform {
  transform(value: ObjectiveDto, metadata: ArgumentMetadata) {
    if (typeof value.title === 'string' && value.title.length > 0) {
      return {
        title: value.title.charAt(0).toUpperCase() + value.title.slice(1),
      };
    }
    return value;
  }
}
