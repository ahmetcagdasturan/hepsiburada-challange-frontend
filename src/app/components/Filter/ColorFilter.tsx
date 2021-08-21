import { useDispatch } from "react-redux";
import productManager from "../../../services/managers/productManager";


const ColorFilter = ({colors}:{colors: object}) => {

    const dispatch = useDispatch()
    const getFilteredProductsByFilterType = (filterType: string, filterName: string) => {
        dispatch(productManager.getFilteredProducts(filterType, filterName))
    }

    return(
        <div className="filter-content">
            <h4>Renk</h4>
            {
                Object.entries(colors).map((item,index) => (
                    <button key={index} onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                        e.preventDefault();
                        getFilteredProductsByFilterType("color",item[0])
                    }}>{item[0]} ({item[1]})</button>
                ))
            }
        </div>
    )
}
export default ColorFilter;