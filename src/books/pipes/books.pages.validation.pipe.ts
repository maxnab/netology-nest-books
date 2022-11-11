import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import type { BookDto } from '../dto/book.dto';

@Injectable()
class PagesValidationPipe implements PipeTransform {
  public transform(value: BookDto, metadata: ArgumentMetadata) {
    if (value.price > 1) {
      return value;
    } else {
      throw new Error('Wrong book price');
    }
  }
}

export { PagesValidationPipe };
