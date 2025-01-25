import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MiddlewareDateMiddleware } from './middleware-date/middleware-date.middleware';
import { Middleware } from './middleware-date/middleware-date.middleware';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(MiddlewareDateMiddleware);
  

  const swaggerConfig = new DocumentBuilder()
  .setTitle('Plataforma Ferreteria JRC 2025')
  .setDescription('API de la plataforma de la ferreteria JRC \n Dentro de las principales funcionalidades se encuentra el crear facturas, consultar lista de precios, acceder mediante un ususario')
  .setVersion('1.0')
  .build();

  const documentFactory = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(3000);
}
bootstrap();