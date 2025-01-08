import { Injectable } from "@nestjs/common";
import { IProducts } from "./interface/products.interface";
import { error } from "console";

@Injectable()
export class ProductsRepository {
    private products: IProducts[] = [
        {
            code: "10010000015",
            description: "ABECEDARIO DE GOLPE DERECHO 1.5MM GERMANY",
            reference: "13501 0001",
            price: 67010
        },
        {
            code: "10010000020",
            description: "ABECEDARIO DE GOLPE DERECHO 2.0MM GERMANY",
            reference: "13501 0002",
            price: 85520
        },
        {
            code: "10010000025",
            description: "ABECEDARIO DE GOLPE DERECHO 2.5MM GERMANY",
            reference: "13501 0000",
            price: 70560
        }
    ]

    getProducts(){
        const productos = this.products;
        return productos
    }

    getProductByCodeQuery(code: string){
        // return this.products.find(products => products.code === code)
        return this.products.find(products => products.code === code);
    }

    getProductsByCode(codigo: string){
        if(this.products.find(products => products.code === codigo)){
            return this.products.find(products => products.code === codigo)
        }else{
            return {error: "Codigo no existe"}
        }
    }

    createProducts(products: IProducts){
        this.products = [...this.products, products]
        console.log(typeof(products.price))
        return {products: "producto creado"}
    }

    updateProducts(codigo: string, updateProduct: any){
        const searchProduct = this.products.findIndex(product => product.code === codigo)

        if(searchProduct === -1){
            return 'Producto no encontrado'
        }

        this.products[searchProduct] = {
            ...this.products[searchProduct],
            ...updateProduct
        }

        return 'Producto Actualizado correctamente'
        
    }

    deleteProductsById(codigo: string){
        const productIndex = this.products.findIndex(products => products.code === codigo)
        console.log(`Valor de PorductIndex ${productIndex}`)

        if(productIndex === -1){
             return 'Producto no encontrado'
        }

        this.products.splice(productIndex, 1);
        return 'Producto Eliminado correctemente';
    }
}