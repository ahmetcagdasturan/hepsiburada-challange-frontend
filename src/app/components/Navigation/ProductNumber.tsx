import { useSelector } from 'react-redux';
import '../../../assets/styles/Product/_product-number.scss';
import { CartStateType } from '../../../types/state-types/cartStateType';

const ProductNumber = () => {
    const productState = useSelector<CartStateType, CartStateType["cart"]>(state => state.cart)

    return(
        <div className="product-number-badge">
            <label>{productState.productList.length}</label>
        </div>
    )
}
export default ProductNumber