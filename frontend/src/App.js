import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./css/style.css";
import { Helmet } from "react-helmet";
import Footer from "./components/Footer";
import "./css/font-awesome.min.css";
import "./css/ionicons.min.css";
import MainNavigationBar from "./components/MainNavigationBar";
import SecondaryNavigationBar from "./components/SecondaryNavigationBar";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MainNavigationBar />
      <SecondaryNavigationBar />
      <Routes>
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
      <Helmet>
        <script src="js/product_carousel.js"></script>
      </Helmet>
    </BrowserRouter>
  );
}

export default App;
