import '../../assets/styles/_page-content.scss';
import ContentHeader from './ContentHeader';
import Filter from './Filter/Filter';
import ProductContainer from './Product/ProductContainer';

const PageContent = () => {
    return (
        <div className="page-content">
             <ContentHeader />
             <div className="content-wrapper">
           
            <Filter />
            <ProductContainer />
        </div>
        </div>
        
    )
}
export default PageContent;