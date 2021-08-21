
import { ProductActionType } from "../../types/action-types/productActionTypes"
import IProduct from "../../types/models/IProduct"
import IProductResult from "../../types/models/IProductResult"
import visibilityTypes from "../../types/visibility-types/visibilityTypes"

const updateProductList = (productList: IProductResult) : ProductActionType => {
    return {
        type: visibilityTypes.UPDATE_PRODUCT_LIST,
        payload: productList
    }
}

const updateProduct = (product: IProduct) : ProductActionType => {
    return {
        type: visibilityTypes.UPDATE_PRODUCT,
        payload: product
    }
}

const changeSortingOptions = (optionType: string) : ProductActionType => {
    return {
        type: visibilityTypes.CHANGE_SORTING_OPTION,
        payload: optionType
    }
}

const productAction = {
    updateProductList,
    updateProduct,
    changeSortingOptions
}
export default productAction;