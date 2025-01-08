import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { IProducts } from './interface/products.interface';

@Injectable()
export class ProductsService {
    constructor(private productsRepository: ProductsRepository){}
    getProducts(){
        return this.productsRepository.getProducts()
    }

    getProductsByCode(codigo: string){
        return this.productsRepository.getProductsByCode(codigo);
    }

    getProductByCodeQuery(code: string){
        return this.productsRepository.getProductByCodeQuery(code);
    }

    postProducts(products: IProducts){
        return this.productsRepository.createProducts(products);
    }

    deleteProducts(codigo: string){
        return this.productsRepository.deleteProductsById(codigo);
    }

    updateProductByCode(codigo: string, updateProduct: IProducts){
        return this.productsRepository.updateProducts(codigo, updateProduct);
    }

    getAdmin(){
        return "Este es el modulo de ADMIN"
    }
}
