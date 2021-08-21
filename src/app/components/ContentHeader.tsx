import '../../assets/styles/_content-header.scss';
import SearchingProduct from './ContentHeader/SearchingProduct';
import SelectBox from './SelectBox';

const ContentHeader = () => {
    return(
        <div className="content-header">
            <SearchingProduct />
            <SelectBox />
        </div>
    )
}
export default ContentHeader;