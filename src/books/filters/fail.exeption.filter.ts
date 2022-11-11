import {
  Catch,
  HttpException,
  ExceptionFilter,
  ArgumentsHost,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
class FailExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    response.status(status).json({
      timestamp: Date.now(),
      status: 'fail',
      data: exception.cause.message,
      code: status ?? 500,
    });
  }
}

export { FailExceptionFilter };
