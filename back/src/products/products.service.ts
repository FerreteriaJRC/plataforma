import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    getAllProducts(): string{
        return "Bienvenido a la plaforma de FERRETERIA JRC CIA LTDA. Estas sobre la ruta de productos"
    }
}
