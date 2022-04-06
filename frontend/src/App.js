import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./css/style.css";
import { Helmet } from "react-helmet";
import CarouselImageSlider from "./components/CarouselImageSlider";
import MostVisitedCathegories from "./components/MostVisitedCathegories";
import Footer from "./components/Footer";
import "./css/font-awesome.min.css";
import "./css/ionicons.min.css";
import MainNavigationBar from "./components/MainNavigationBar";
import SecondaryNavigationBar from "./components/SecondaryNavigationBar";
import NewProductsSection from "./components/NewProductsSection";
import PcprodzInformationLabel from "./components/PcprodzInformationLabel";

function App() {
  return (
    <div>
      <MainNavigationBar></MainNavigationBar>
      <SecondaryNavigationBar></SecondaryNavigationBar>
      <CarouselImageSlider></CarouselImageSlider>

      <div className="contentDiv">
        <NewProductsSection></NewProductsSection>
        <MostVisitedCathegories></MostVisitedCathegories>
        <PcprodzInformationLabel></PcprodzInformationLabel>
      </div>

      <Footer></Footer>
      <Helmet>
        <script src="js/product_carousel.js"></script>
      </Helmet>
    </div>
  );
}

export default App;
