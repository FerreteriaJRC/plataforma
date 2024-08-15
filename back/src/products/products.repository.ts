import { Injectable } from "@nestjs/common";

@Injectable()
export class productsRespository {
    private products = [
        {
            codigo: "10010000015",
            descripcion: "ABECEDARIO DE GOLPE DERECHO 1.5MM GERMANY",
            referencia: "13501 0001",
            precio: "67010"
        },
        {
            codigo: "10010000020",
            descripcion: "ABECEDARIO DE GOLPE DERECHO 2.0MM GERMANY",
            referencia: "13501 0002",
            precio: "85520"
        },
        {
            codigo: "10010000025",
            descripcion: "ABECEDARIO DE GOLPE DERECHO 2.5MM GERMANY",
            referencia: "13501 0000",
            precio: "70560"
        }
    ]

    getProducts(){
        return this.products;
    }
}