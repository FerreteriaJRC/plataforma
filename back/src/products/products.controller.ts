import { Controller, Get, Req, Res, Next, Post, Param, Body, Delete, Put, Query, UseGuards } from '@nestjs/common';
import { Request, Response, NextFunction} from 'express'; // Asegúrate de tener estas importaciones
import { ProductsService } from './products.service'; // Asegúrate de que el servicio esté importado correctamente
import { IProducts } from './interface/products.interface';
import { AdminGuard } from 'src/guard/admin.guard';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService) {}
    
    @Get('list')
    getAll(@Req() req: Request, @Res() res: Response, @Next() next: NextFunction) {
        try {
            const getAllProducts = this.productService.getProducts(); // Usar await si el método es asíncrono
            return res.status(200).send(getAllProducts); // Devolver la lista de productos
        } catch (error) {
            return res.status(500).json({
                message: "Error al obtener la lista de productos",
                error: error.message || "Error del servidor"
            });
        }
    }

    @Get('admin')
    @UseGuards(AdminGuard)
    getAdmin(){
        return this.productService.getAdmin();
    }
    
    // @Get('codeProduct')
    // getProductsByCodeQuery(@Query('code') code: string){
    //     return this.productService.getProductByCodeQuery(code)
    // }
    @Get('codeProducts')
    getProductsByCodes(@Query('code') code: string){
        return this.productService.getProductByCodeQuery(code)
    }

    @Post()
    createProduct(@Body() products: IProducts){
        return this.productService.postProducts(products)
    }

    @Delete(':id')
    deleteProductByCode(@Param('id') codigo: string){
        return this.productService.deleteProducts(codigo)
    }

    @Get(':id')
    getProductsByCode(@Param('id') codigo: string, @Res() res: Response, @Req() req: Request, @Next() next: NextFunction){
        try {
            const productsByCode = this.productService.getProductsByCode(codigo);
            return res.status(200).send(productsByCode);
        } catch (error) {
            return res.status(500).json({
                message: "Error al traer el producto",
                error: error.message || "Error del servidor"
            })
        }
    }

    @Put(':id')
    updateProductById(@Param('id') codigo: string, @Body() product: IProducts){
        try {
            const updateProductByCode = this.productService.updateProductByCode(codigo, product)
            return updateProductByCode
        } catch (error) {
            return {error: "Error al actualizar el producto"}
        }
    }
    
    
}
