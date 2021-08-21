import IProduct from "../models/IProduct";
import IProductResult from "../models/IProductResult";
import visibilityTypes from "../visibility-types/visibilityTypes";

export interface GetProductList {
    type: typeof visibilityTypes.UPDATE_PRODUCT_LIST,
    payload: IProductResult
}

export interface UpdateProduct {
    type: typeof visibilityTypes.UPDATE_PRODUCT,
    payload: IProduct
}

export interface ChangeSortingOption {
    type: typeof visibilityTypes.CHANGE_SORTING_OPTION,
    payload: string
}

export type ProductActionType = GetProductList | UpdateProduct | ChangeSortingOption;