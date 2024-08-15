import { Controller, Get } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService){}
    
    @Get('list')
    getAll(req: Request, res: Response, next: NextFunction): string{
        return this.productService.getAllProducts()
    }
}
