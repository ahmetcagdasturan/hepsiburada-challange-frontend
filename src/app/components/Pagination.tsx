
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../assets/styles/_pagination.scss';
import productManager from '../../services/managers/productManager';
import { ProductStateType } from '../../types/state-types/productStateType';

const Pagination = () => {
    const pageSize = 12;
    const maxButtonCount = 3;
    const [rightButtonClickCount, setRightButtonClickCount] = useState(0)
    const state = useSelector<ProductStateType, ProductStateType["product"]>(state => state.product)
    const dispatch = useDispatch();

    const createButtonList = () => {
        let buttonList = [];
        buttonList.push(<button className="pagination-back-button" key={"<"}
            onClick={() => { setRightButtonClickCount(rightButtonClickCount - 1) }}
            disabled={0 >= rightButtonClickCount}>{"<"}</button>);

        for (let i = 1; i <= Math.min(Math.ceil(state.totalItemCount / pageSize), maxButtonCount ); i++) {
            buttonList.push(<button key={i + rightButtonClickCount}
                                    onClick={() => { 
                                        dispatch(productManager.getPaginatedProduct(i + rightButtonClickCount));
                                    }}>{i + rightButtonClickCount}</button>);
        }


        buttonList.push(<button className="pagination-next-button" key={">"}
            onClick={() => { setRightButtonClickCount(rightButtonClickCount + 1) }}
            disabled={Math.ceil(state.totalItemCount / pageSize) < maxButtonCount + rightButtonClickCount}>{">"}</button>);

        return buttonList;
    }

    return (
        <div className="pagination">
            {
                createButtonList()
            }

        </div>
    )
}
export default Pagination





