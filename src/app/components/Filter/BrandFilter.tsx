import React from "react";
import { useDispatch } from "react-redux"
import productManager from "../../../services/managers/productManager"

const BrandFilter = ({brands} : {brands: object}) => {

    const dispatch = useDispatch()
    const getFilteredProductsByFilterType = (filterType: string, filterName: string) => {
        dispatch(productManager.getFilteredProducts(filterType, filterName))
    }

    return(
        <div className="filter-content">
            <h4>Marka</h4>
             {
                Object.entries(brands).map((item,index) => (
                    <button key={index} onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                        e.preventDefault();
                        getFilteredProductsByFilterType("brand", item[0])
                    }}>{item[0]} ({item[1]})</button>
                ))
            }
        </div>
    )
}
export default BrandFilter