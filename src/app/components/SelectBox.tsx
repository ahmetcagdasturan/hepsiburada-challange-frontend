import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../assets/styles/_select-box.scss';
import productManager from '../../services/managers/productManager';
import { ProductStateType } from '../../types/state-types/productStateType';

const SelectBox = () => {
    const dispatch = useDispatch();
    const selectedOptionState = useSelector<ProductStateType, ProductStateType["selectedOption"]>(state => state.selectedOption)
    const getSelectedOption = (searchParam: string): void => {
         dispatch(productManager.sortCurrentProducts(searchParam))   
    }
    return (
        <div className="select-box-container">
            <select name="sort-filtering" className="select-box" onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                getSelectedOption(e.target.value)
            }}>
                <option disabled selected hidden value={selectedOptionState}>Sıralama</option>
                <option value="cheapest">En Düşük Fiyat</option>
                <option value="most-expensive">En Yüksek Fiyat</option>
                <option value="newest">{"En Yeniler (A>Z)"}</option>
                <option value="oldest">{"En Eskiler (A>Z)"}</option>
            </select>
        </div>
    )
}
export default SelectBox