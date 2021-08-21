import IProduct from "../models/IProduct";


export type ProductStateType = {
    product: {
        productList: IProduct[],
        totalItemCount: number
    }
    selectedOption: string
}