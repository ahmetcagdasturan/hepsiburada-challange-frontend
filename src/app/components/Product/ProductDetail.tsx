import IProduct from "../../../types/models/IProduct";
import '../../../assets/styles/Product/_product-detail.scss';

const ProductDetail = ({product}:{product: IProduct}) => {
    return(
        <div className="product-detail">
            <div><span>Marka:</span> {product.brand}</div>
            <div><span>Renk:</span> {product.name}</div>
            <p>{product.price}</p>
        </div>
    )
}
export default ProductDetail;