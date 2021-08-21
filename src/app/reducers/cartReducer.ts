import { CartActionType } from "../../types/action-types/cartActionTypes"
import IProduct from "../../types/models/IProduct"
import visibilityTypes from "../../types/visibility-types/visibilityTypes"

export const INITIAL_STATE = {
    productList: [] as IProduct[],
    deleteProductFromCartSignal: false,
    productIdInCart: -1 
}

export const cartReducer = (state = INITIAL_STATE, action: CartActionType ) => {
    switch(action.type){
        case visibilityTypes.ADD_PRODUCT_TO_CART:
            return {
                ...state,
                 productList: [...state.productList, action.payload]
            }
        case visibilityTypes.DELETE_PRODUCT_FROM_CART:
            return {
                ...state,
                 productList: action.payload
            }
        case visibilityTypes.GET_PRODUCTS_IN_CARTS:
            return {
                ...state,
                 productList: action.payload
            }
        case visibilityTypes.OPEN_DELETE_MODAL:
            return{
                ...state, deleteProductFromCartSignal: true
            }
        case visibilityTypes.SEND_PRODUCT_ID_IN_CART:
            return {
                ...state, productIdInCart: action.payload
            }           
        default: 
            return {
                ...state
            }      
    }
}