import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { KeyResultsNotFoundError } from './key-results-not-found-error';
import { Response } from 'express';

@Catch(KeyResultsNotFoundError)
export class KeyResultsNotFoundFilter implements ExceptionFilter {
  catch(exception: KeyResultsNotFoundError, host: ArgumentsHost): any {
    const context = host.switchToHttp();
    const res = context.getResponse<Response>();
    res.status(HttpStatus.NOT_FOUND).send({ message: exception.message });
  }
}
