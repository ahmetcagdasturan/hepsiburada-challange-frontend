import { Dispatch } from "redux"
import actions from "../../app/actions/actions"
import IProductResult from "../../types/models/IProductResult"
import cartRepository from "../repositories/cartRepository"
import productRepository from "../repositories/productRepository"


const getProductList = () => {
    return async ( dispatch: Dispatch ) => {
        productRepository.getProductList().then((products : IProductResult)=> {
            cartRepository.getProductsInCart().then(productsInCart => {
               productsInCart.forEach(product => {
                   products.productList.filter(item => item.id === product.id)[0].isInCart = true; 
               })
               dispatch(actions.productAction.updateProductList(products));
            })
        })
    }
}

const searchProducts = (searchInput: string) => {
    return async ( dispatch: Dispatch ) => {
         productRepository.searchProducts(searchInput).then((productModel: IProductResult) => {
             dispatch(actions.productAction.updateProductList(productModel));
         })   
    }
}

const getPaginatedProduct = (indexNumber: number) => {
    return async ( dispatch: Dispatch ) => {
        productRepository.getPaginatedProduct(indexNumber).then((productModel: IProductResult) => {
            cartRepository.getProductsInCart().then(productsInCart => {
                productsInCart.forEach(product => {
                    const productInCart = productModel.productList.filter(item => item.id === product.id)[0];
                    if(productInCart !== undefined){
                        productInCart.isInCart = true;
                    }
                })
                dispatch(actions.productAction.updateProductList(productModel));
             })
        })   
   }
}

const sortCurrentProducts = (sortParam: string) => {
    return async ( dispatch: Dispatch ) => {
        productRepository.getProductList().then((productModel: IProductResult) => {
            if(sortParam === "cheapest"){
                productModel.productList.sort((a,b) => {
                    return a.price - b.price
                })
            }
            else if(sortParam === "most-expensive"){
                productModel.productList.sort((a,b) => {
                    return b.price - a.price
                }) 
            }
            else if(sortParam === "newest"){
                productModel.productList.sort((a,b) => {
                        var dateA = new Date(a.createdDate), dateB = new Date(b.createdDate);
                        return dateB.getTime() - dateA.getTime()
                    })
            }
            else if(sortParam === "oldest"){
                productModel.productList.sort((a,b) => {
                    var dateA = new Date(a.createdDate), dateB = new Date(b.createdDate);
                    return dateA.getTime() - dateB.getTime()
                })
        }
            dispatch(actions.productAction.updateProductList(productModel));
        })   
   }
}

const changeStatusProduct = (productId: number) => {
    return async (dispatch: Dispatch) => {
        productRepository.getProductList().then((productModel: IProductResult) => {
            cartRepository.getProductsInCart().then(productsInCart => {
                productsInCart.forEach(product => {
                    const productInCart = productModel.productList.filter(item => item.id === product.id && item.id !== productId)[0];
                    if(productInCart !== undefined){
                        productInCart.isInCart = true;
                    }
                })
                dispatch(actions.productAction.updateProductList(productModel));
             })
        })   
    }
}

const getFilteredProducts = (filterType: string, filterName: string) => {
    return async (dispatch: Dispatch) => {
        productRepository.getFilteredProductsByFilterTypes(filterType, filterName).then((productModel: IProductResult) => {
            dispatch(actions.productAction.updateProductList(productModel));
        });
    }
}

const productManager = {
    getProductList,
    searchProducts,
    getPaginatedProduct,
    sortCurrentProducts,
    changeStatusProduct,
    getFilteredProducts
}
export default productManager;