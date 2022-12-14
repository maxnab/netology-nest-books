import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { StatusInterceptor } from './interceptors/app.status.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new StatusInterceptor());
  await app.listen(3000);
}

bootstrap();
