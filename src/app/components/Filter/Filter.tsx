import { useEffect, useState } from 'react';
import '../../../assets/styles/Filter/_filter.scss';
import productRepository from '../../../services/repositories/productRepository';
import BrandFilter from './BrandFilter';
import ColorFilter from './ColorFilter';
import Sort from './Sort';

const Filter = () => {

    const [colorGroupList, setColourGroupList] = useState<object>({});
    const [brandGroupList, setBrandGroupList] = useState<object>({});

    useEffect(() => {
        productRepository.getFilteredProductList("color").then((data: object) => {
            setColourGroupList(data);
        })
        productRepository.getFilteredProductList("brand").then((data: object) => {
            setBrandGroupList(data);
        })
    }, [])

    return (
        <div className="filter-container">
            <ColorFilter colors={colorGroupList} />
            <Sort />
            <BrandFilter brands={brandGroupList} />
        </div>
    )
}
export default Filter;