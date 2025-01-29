export interface invoice {
    id: string,
    consecutiveInvoice: number,
    date: Date,
    idSeller: string,
    nameClient: string,
    idClient: string,
    idProduct: string,
    cant: number,
    unitValue: number,
    totalValue: number
}