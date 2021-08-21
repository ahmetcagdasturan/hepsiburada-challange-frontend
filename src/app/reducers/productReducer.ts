import { GetProductList } from "../../types/action-types/productActionTypes";
import IProduct from "../../types/models/IProduct";
import visibilityTypes from "../../types/visibility-types/visibilityTypes";

const INITIAL_STATE = {
    productList: [] as IProduct[],
    selectedOption: "placeholder" as string,
    totalItemCount: 0 as number
}

export const productReducer = (state = INITIAL_STATE, action: GetProductList) => {
    switch(action.type){
        case visibilityTypes.UPDATE_PRODUCT_LIST:
            return {
                ...state,
                productList: action.payload.productList,
                totalItemCount : action.payload.totalItemCount
            }
        case visibilityTypes.CHANGE_SORTING_OPTION:
            return {
                selectedOption: action.payload
            }       
        default:
            return {
                ...state
            }    
    }
}