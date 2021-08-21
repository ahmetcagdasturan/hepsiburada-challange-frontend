
import IProduct from "../models/IProduct";
import visibilityTypes from "../visibility-types/visibilityTypes";

export interface AddProductToCartActionModel {
    type: typeof visibilityTypes.ADD_PRODUCT_TO_CART,
    payload: IProduct
}

export interface DeleteProductFronCartActionModel {
    type: typeof visibilityTypes.DELETE_PRODUCT_FROM_CART,
    payload: number
}

export interface GetProductActionModel {
    type: typeof visibilityTypes.GET_PRODUCTS_IN_CARTS,
    payload: IProduct[]
}

export interface ChangeSortingOptions {
    type: string,
    payload: string
}

export interface OpenDeleteModal {
    type: typeof visibilityTypes.OPEN_DELETE_MODAL,
    payload: boolean
}

export interface SendProductIdInCart {
    type: typeof visibilityTypes.SEND_PRODUCT_ID_IN_CART,
    payload: number
}

export type CartActionType =  AddProductToCartActionModel | DeleteProductFronCartActionModel | GetProductActionModel | ChangeSortingOptions | OpenDeleteModal | SendProductIdInCart;