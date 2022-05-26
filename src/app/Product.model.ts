// export class Product {
//     constructor(public name: string, public price: number, public imgSrc: string, public inCart: boolean) { }
// }

export interface Product {
    id?: number,
    name: string,
    price: number,
    imgSrc: string,
    inCart: boolean
}