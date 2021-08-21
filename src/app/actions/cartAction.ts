import { CartActionType } from "../../types/action-types/cartActionTypes"
import IProduct from "../../types/models/IProduct"
import visibilityTypes from "../../types/visibility-types/visibilityTypes"


const addProductToCart = (product: IProduct): CartActionType => {
    return {
        type: visibilityTypes.ADD_PRODUCT_TO_CART,
        payload: product
    }
} 

const openDeleteModel = (deleteProductFromCartSignal: boolean) : CartActionType => {
    return {
        type: visibilityTypes.OPEN_DELETE_MODAL,
        payload: deleteProductFromCartSignal
    }
}

const sendProductIdInCart = (productId: number): CartActionType => {
    return {
        type: visibilityTypes.SEND_PRODUCT_ID_IN_CART,
        payload: productId 
    }
}

const deleteFromCart = (productList: IProduct[]): CartActionType  => {
    return {
        type: visibilityTypes.DELETE_PRODUCT_FROM_CART,
        payload:  productList
    }
}

const cartAction = {
    addProductToCart,
    deleteFromCart,
    openDeleteModel,
    sendProductIdInCart
}
export default cartAction