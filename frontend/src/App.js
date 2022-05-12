import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./css/errors.css";
import "./css/style.css";
import "./css/new css/responsive.css";
import "./css/new css/style.css";
import "./css/new css/ui.css";
import "./css/new css/style2.css";
import { Helmet } from "react-helmet";
import Footer from "./components/Footer";
import "./css/font-awesome.min.css";
import "./css/ionicons.min.css";
import MainNavigationBar from "./components/MainNavigationBar";
import SecondaryNavigationBar from "./components/SecondaryNavigationBar";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CartPage from "./pages/CartPage";
import ProfilePage from "./pages/ProfilePage";
import PlaceOrder from "./components/PlaceOrder";
import AdminPage from "./pages/AdminPage";
import AdminRoute from "./Auth/AdminRoute";
import ShipingFormPage from "./pages/ShipingFormPage";
//

function App() {
  return (
    <Router>
      <MainNavigationBar />
      <SecondaryNavigationBar />

      <Route path="/" component={HomePage} exact />
      <div style={{ margin: "auto", maxWidth: "1920px" }}>
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/search=:text" component={SearchPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/cart/:id?" component={CartPage} />
        <Route path="/profile" component={ProfilePage} />
        {/*<Route path="/placeorder" component={PlaceOrder} />*/}
        <Route path={"/placeorder"} component={ShipingFormPage} />
        <AdminRoute path="/admin" component={AdminPage} />
      </div>
      <Footer />
      <Helmet>
        <script src="js/product_carousel.js"></script>
        <script src="js/searchbox.js"></script>
        <script src="js/script.js"></script>
      </Helmet>
    </Router>
  );
}

export default App;
