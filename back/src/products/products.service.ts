import { Injectable } from '@nestjs/common';
import { productsRespository } from './products.repository';

@Injectable()
export class ProductsService {
    constructor(private productsRepository: productsRespository){}
    getProducts(){
        return this.productsRepository.getProducts()
    }
}
