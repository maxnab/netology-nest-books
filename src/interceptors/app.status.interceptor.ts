import {
  CallHandler,
  Injectable,
  NestInterceptor,
  ExecutionContext,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
class StatusInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => ({
        status: 'success',
        data,
      })),
      catchError(async (error) => ({ status: 'fail', data: error })),
    );
  }
}

export { StatusInterceptor };
