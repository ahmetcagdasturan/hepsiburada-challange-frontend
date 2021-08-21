
import IProductResult from "../../types/models/IProductResult";
import axios, { AxiosResponse } from 'axios'
import IFilter from "../../types/models/IFilter";

const getProductList = () : Promise<IProductResult> => {
       return new Promise( (resolve, reject) => {
        axios.get("http://localhost:1515/product/getAllProducts").then((data: AxiosResponse<IProductResult>) => {
            resolve(data.data)
        })
       } )
}

const searchProducts = (searchInput:string):Promise<IProductResult> => {
    return new Promise( (resolve, reject ) => {
        axios.get("http://localhost:1515/product/searchedProduct" , {params: {
            searchInput: searchInput
        }} ).then((data: AxiosResponse<IProductResult>) => {
            resolve(data.data)
        })
    })
}

const getPaginatedProduct = (indexNumber: number): Promise<IProductResult> => {
    return new Promise( (resolve, reject ) => {
        axios.get("http://localhost:1515/product/getPaginatedProduct" , {params: {
            indexNumber: indexNumber
        }})
        .then((data: AxiosResponse<IProductResult>) => {
            resolve(data.data)
        })
    })
}

const getFilteredProductList = (filterType: string) : Promise<IFilter> => {
    return new Promise( (resolve, reject ) => {
        axios.get("http://localhost:1515/product/filteredProducts" , {params: {
            filterType: filterType
        }})
        .then((data: AxiosResponse<IFilter>) => {
            resolve(data.data)
        })
    })
}

const getFilteredProductsByFilterTypes = (filterType: string, filterName: string) : Promise<IProductResult> => {
    return new Promise( (resolve, reject) => {
        axios.get("http://localhost:1515/product/filterProductsByType", {params: {
            filterType: filterType,
            filterName: filterName
        }})
        .then((data: AxiosResponse<IProductResult>) => {
            resolve(data.data);
        })
    })
}

const productRepository = {
    getProductList,
    searchProducts,
    getPaginatedProduct,
    getFilteredProductList,
    getFilteredProductsByFilterTypes
}
export default productRepository