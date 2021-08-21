import IProduct from "../models/IProduct";

export type CartStateType = {
    cart:{
        productList: IProduct[],
        productIdInCart: number
    }
}