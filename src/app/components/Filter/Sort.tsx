import { useDispatch } from 'react-redux';
import '../../../assets/styles/Filter/_sort.scss';
import productManager from '../../../services/managers/productManager';

const Sort = () => {

    const dispatch = useDispatch();

    const changeSorting = (sortingParam: string) => {
        dispatch(productManager.sortCurrentProducts(sortingParam));
    } 

    return(
        <div className="sort-content">
            <h4>Sıralama</h4>
            <div className="sort-button-group">
            <button className="cheapest" onClick={() => {
                changeSorting("cheapest");
            }}>En Düşük Fiyat</button>
            <button className="most-expensive" onClick={() => {
                changeSorting("most-expensive");
            }} >En Yüksek Fiyat</button>
            <button className="newest" onClick={() => {
                changeSorting("newest");
            }}>{"En Yeniler (A>Z)"}</button>
            <button className="oldest" onClick={() => {
                changeSorting("oldest");
            }}>{"En Eskiler (Z>A)"}</button>
            </div>
        </div>
    )
}
export default Sort;