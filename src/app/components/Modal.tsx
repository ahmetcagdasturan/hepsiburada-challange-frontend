import { useDispatch, useSelector } from 'react-redux';
import '../../assets/styles/_modal.scss';
import cartManager from '../../services/managers/cartManager';
import productManager from '../../services/managers/productManager';
import { CartStateType } from '../../types/state-types/cartStateType';
import actions from '../actions/actions';

const Modal = () => {

    const dispatch = useDispatch()
    const productIdInCart = useSelector<CartStateType, number>(state => state.cart.productIdInCart);

    const noButtonAction = () => {
       dispatch(actions.cartAction.sendProductIdInCart(-1));
    }

    const yesButtonAction = () => {
        dispatch(cartManager.deleteProductFromCart(productIdInCart))
        dispatch(actions.cartAction.sendProductIdInCart(-1));
        dispatch(productManager.changeStatusProduct(productIdInCart));
    }

    return(
        <div className="modal" style={productIdInCart === -1 ? {display:'none'} : {display: 'block'}}>
            <h4 className="modal-header">Ürünü silmek istediğinize emin misiniz ?</h4>
            <hr />
            <div className="modal-body">
                dasdsadasdasd
            </div>
            <div className="modal-footer">
                <button className="yes-button" onClick={() => yesButtonAction()}>EVET</button>
                <button className="no-button" onClick={() => noButtonAction()}>HAYIR</button>
            </div>
        </div>
    )
}
export default Modal