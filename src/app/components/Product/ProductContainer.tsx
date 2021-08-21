import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import productManager from "../../../services/managers/productManager";
import { ProductStateType } from "../../../types/state-types/productStateType";
import Product from "./Product";
import '../../../assets/styles/Product/_product-container.scss'
import Pagination from "../Pagination";

const ProductContainer = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(productManager.getPaginatedProduct(1));
    }, [])

    const productState = useSelector<ProductStateType, ProductStateType["product"]>(state => state.product)
    console.log(productState);
    return (
        <div className="test">
            <div className="product-container">
                {
                    productState.productList.map((product, index) => (
                        <Product key={index} product={product} />
                    ))
                }

            </div>
            <Pagination />
        </div>
    )
}
export default ProductContainer;