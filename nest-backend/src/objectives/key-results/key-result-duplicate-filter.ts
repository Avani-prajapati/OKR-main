import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { KeyResultDuplicateError } from './key-result-duplicate-error';

@Catch()
export class KeyResultDuplicateFilter implements ExceptionFilter {
  catch(exception: KeyResultDuplicateError, host: ArgumentsHost): any {
    const context = host.switchToHttp();
    const res = context.getResponse<Response>();
    res.status(HttpStatus.BAD_REQUEST).send({ message: exception.message });
  }
}
