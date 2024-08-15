import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { productsRespository } from './products.repository';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, productsRespository]
})
export class ProductsModule {}
