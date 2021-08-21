import logo from '../../../../assets/images/iphone11.jpeg';
import IProduct from '../../../../types/models/IProduct';
import '../../../../assets/styles/MyCart/_cart-element.scss';
import { useDispatch } from 'react-redux';
import actions from '../../../actions/actions';

const CartElement = ({ product }: { product: IProduct }) => {

    const dispatch = useDispatch();
    const deleteProductFromCart = (productId: number): void => {
        dispatch(actions.cartAction.openDeleteModel(true));
        dispatch(actions.cartAction.sendProductIdInCart(productId));
    }
    return (
        <div className="cart-element-content">
            <img className="cart-element-logo" src={logo} width="70" height="70"></img>
            <div className="cart-element-detail-content">
                <p className="cart-element-header">
                    {product.name}
                </p>
                <button className="cart-element-delete-button" onClick={() => {
                    deleteProductFromCart(product.id)
                }}>Kaldır</button>
            </div>
        </div>
    )
}
export default CartElement