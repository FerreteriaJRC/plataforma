import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MiddlewareDateMiddleware } from './middleware-date/middleware-date.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(MiddlewareDateMiddleware);
  await app.listen(3000);
}
bootstrap();