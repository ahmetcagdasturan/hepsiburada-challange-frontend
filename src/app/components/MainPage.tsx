
import Navbar from "./Navigation/Navbar";
import '../../assets/styles/_main-page.scss';
import PageContent from "./PageContent";
import Modal from "./Modal";

const MainPage = () => {

    return (
        <div className="main-container">
            <header>
                <Navbar />
                <hr className="navigation-separator" />
            </header>
            <section>
                <PageContent /> 
                <Modal />
            </section>
        </div>
    )
}
export default MainPage;