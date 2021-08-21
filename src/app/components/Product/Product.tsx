import { useDispatch } from 'react-redux'
import logo from '../../../assets/images/iphone11.jpeg'
import cartManager from '../../../services/managers/cartManager';
import IProduct from '../../../types/models/IProduct'
import '../../../assets/styles/Product/_product.scss';
import ProductDetail from './ProductDetail';

const Product = ( {product} : {product:IProduct} ) => {
    const dispatch = useDispatch();
    return(
        <div className="card card-border-style">
            <div className="card-logo card-border-style">
                <img src={logo} alt="" />
            </div>
            <p className="card-content">
                Apple İphone 11 Pro
            </p>
            <ProductDetail product={product} />
           <div className="add-to-cart-button">
           <button style={product.isInCart ? {backgroundColor: '#F1F1F1', color: '#B8B8B8', pointerEvents: 'none'} : {backgroundColor: '#FFEEE3', color: '#FD7A2B'}} onClick={()=> {
               dispatch(cartManager.addProductCart(product));
           }}>{product.isInCart ? "Bu ürünü sepete ekleyemezsiniz" : "Sepete Ekle"}</button>
           </div>
        </div>
    )
}

export default Product;


