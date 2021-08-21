import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import cartManager from "../../../../services/managers/cartManager";
import { CartStateType } from "../../../../types/state-types/cartStateType";
import ProductNumber from "../ProductNumber";
import CartElement from "./CartElement";
import '../../../../assets/styles/MyCart/_my-cart.scss';


const MyCart = () => {

    const dispatch = useDispatch();
    const cartState = useSelector<CartStateType, CartStateType["cart"]>(state => state.cart)    
    console.log("sepetimdekiler: ", cartState);
    useEffect(() => {
        dispatch(cartManager.getProductsInCart())
    }, [])

    return (
        <div className="my-cart-container">
            <button className="my-cart-button">Sepetim
                <ProductNumber />
            </button>

            <div className="collapse-cart-menu">
                {
                    cartState.productList.map((product, index) => (
                       <CartElement key={index} product={product} />
                    ))
                }
            </div>
        </div>
    )
}
export default MyCart;