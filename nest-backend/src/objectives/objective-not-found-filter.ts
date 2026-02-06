import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { ObjectiveNotFoundError } from './objective-not-found-error';

@Catch(ObjectiveNotFoundError)
export class ObjectiveNotFoundFilter implements ExceptionFilter {
  catch(exception: ObjectiveNotFoundError, host: ArgumentsHost): any {
    const context = host.switchToHttp();
    const res = context.getResponse<Response>();
    res.status(HttpStatus.NOT_FOUND).send({ message: exception.message });
  }
}
