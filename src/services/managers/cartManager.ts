import { Dispatch } from "redux";
import actions from "../../app/actions/actions";
import { CartActionType } from "../../types/action-types/cartActionTypes";
import IProduct from "../../types/models/IProduct";
import visibilityTypes from "../../types/visibility-types/visibilityTypes";
import cartRepository from "../repositories/cartRepository";

const addProductCart = (product : IProduct) => {
    return async (dispatch: Dispatch) => {
        product.createdDate = new Date();
        product.isInCart = true;
        cartRepository.addProductToCart(product).then((message) => {
            message ? dispatch(actions.cartAction.addProductToCart(product)) : console.error(message);
        })
        .catch(err => {
            console.log(err)
        })
    }
}

const deleteProductFromCart = (productId: number)  => {
    return async (dispatch: Dispatch) => {
        cartRepository.deleteProductToCart(productId).then((productList: IProduct[]) => {
            dispatch(actions.cartAction.deleteFromCart(productList))
        }) 
    }
}

const getProductsInCart = () => {
    return async (dispatch: Dispatch) => {
        cartRepository.getProductsInCart().then(data => {
            let productList = data as IProduct[];
            productList.sort((a,b) => {
                var dateA = new Date(a.createdDate), dateB = new Date(b.createdDate);
                return dateA.getTime() - dateB.getTime()
            })
            const model = {} as CartActionType;
            model.type = visibilityTypes.GET_PRODUCTS_IN_CARTS;
            model.payload = productList
            dispatch(model);        
        })
        .catch(err => {
            alert(err);
        })
    }
}

const cartManager = {
    addProductCart,
    getProductsInCart,
    deleteProductFromCart
}
export default cartManager;