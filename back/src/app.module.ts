import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProductsModule } from './modules/products/products.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { InvoiceModule } from './modules/invoice/invoice.module';
import { Middleware } from './middleware-date/middleware-date.middleware';
import TypeOrmConfig from './config/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [TypeOrmConfig]
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => (
        configService.get('typeorm')
      )
    })
    ,ProductsModule, UsersModule, AuthModule, InvoiceModule],
  controllers: [],
  providers: [],
})
export class AppModule{}
