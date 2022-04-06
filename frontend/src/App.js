import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./style.css";
import { Helmet } from "react-helmet";
import data from "./data.js";

function App() {
  return (
    <div>
      <div className="navcontainer">
        <div className="navigationBar box">
          <input type="checkbox" id="check" />
          <label for="check" className="checkbtn">
            <img src="images/dropdownIcon.svg" alt="dropdownicon" />
          </label>
          <a className="notextdecoration" href="emptyPage.html">
            <img src="images/logo.png" alt="logo" id="logoImg" />
          </a>
          <a
            className="logoLabel notextdecoration whiteColor"
            href="emptyPage.html"
          >
            pc pro dz
          </a>

          <ul>
            <li>
              <img
                src="images/carticon.png"
                alt="carticon"
                className="linkicon"
              />
              <a
                className="notextdecoration labeloflink active"
                href="emptyPage.html"
              >
                Panier
              </a>
            </li>
            <li>
              <img
                src="images/accounticon.png"
                alt="accounticon"
                className="linkicon"
              />
              <a
                className="notextdecoration labeloflink active"
                href="emptyPage.html"
              >
                Se Connecter
              </a>
            </li>
            <li>
              <img
                src="images/languageicon.png"
                alt="languageicon"
                className="linkicon"
              />
              <a
                className="notextdecoration labeloflink active"
                href="emptyPage.html"
              >
                Langue
              </a>
            </li>
          </ul>
        </div>
        <div className="box overlay">
          <div className="input-group rounded">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span
              className="input-group-text border-1"
              id="search-addon"
              style={{ backgroundColor: "whitesmoke" }}
            >
              <a href="emptyPage.html">
                <i className="fa fa-search ms-auto whitebackground"></i>
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="secondNavBar" style={{ backgroundColor: "#3c3c3c" }}>
        <div className="dropdown pdngrgt-20">
          <button className="dropbtn">
            <img src="images/dropdownIcon.svg" alt="dropdownicon" />
          </button>
          <div className="dropdown-content">
            <header className="font-cabin font-30 mrgnlft-5 cathegoriesHeader">
              Cathegories
            </header>
            <a
              className="font-cabin font-20 mrgnlft-5 onecathegorie"
              href="emptyPage.html"
            >
              Ordinateurs{" "}
            </a>
            <a
              className="font-cabin font-20 mrgnlft-5 onecathegorie"
              href="emptyPage.html"
            >
              Hardware{" "}
            </a>
            <a
              className="font-cabin font-20 mrgnlft-5 onecathegorie"
              href="emptyPage.html"
            >
              Accesoires{" "}
            </a>
            <a
              className="font-cabin font-20 mrgnlft-5 onecathegorie"
              href="emptyPage.html"
            >
              Cameras{" "}
            </a>
            <a
              className="font-cabin font-20 mrgnlft-5 onecathegorie"
              href="emptyPage.html"
            >
              Divers{" "}
            </a>
          </div>
        </div>

        <a
          className="notextdecoration font-cabin font-20 mrgnrgt-30 whiteColor"
          href="emptyPage.html"
        >
          Meilleurs ventes{" "}
        </a>
        <a
          className="notextdecoration font-cabin font-20 mrgnrgt-30 whiteColor"
          href="emptyPage.html"
        >
          Offres{" "}
        </a>
        <a
          className="notextdecoration font-cabin font-20 mrgnrgt-30 whiteColor"
          href="emptyPage.html"
        >
          Produits{" "}
        </a>
        <a
          className="hideWhenPhone notextdecoration font-cabin font-20 mrgnrgt-30 whiteColor"
          href="emptyPage.html"
        >
          Service client{" "}
        </a>
        <a
          className="hideWhenPhone notextdecoration font-cabin font-20 mrgnrgt-30 whiteColor"
          href="emptyPage.html"
        >
          Nous contacter{" "}
        </a>
      </div>

      <div
        style={{ zIndex: "0" }}
        id="carouselExampleIndicators"
        className="carousel slide carousel-tt"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="images/imageSliderTest.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="images/imageSliderTest.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="images/imageSliderTest.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="contentDiv">
        <div
          className="font-cabin width-full align-center font-40"
          style={{ paddingTop: "150px" }}
        >
          <header>NOUVEAUTES</header>
        </div>
        <div className="carousel-container radius-20">
          <div className="carousel-inner">
            <div className="track">
              {data.products.map((product) => (
                <div class="productCarouselItem">
                  <img
                    class="radius-20 bodyBackground"
                    width="100%"
                    height="100%"
                    src={product.image}
                  />
                  <a
                    class="notextdecoration blackcolor"
                    href={`/product/${product._id}`}
                    key={product._id}
                  >
                    <div class="productinformationpanel info align-center font-20 pdgtp-5">
                      <header class="font-cabin">{product._name}</header>
                      <small class="form-text text-muted font-cabin ">
                        {product.description}
                      </small>
                      <header class="font-cabin font-20 pdgtp-5">
                        Prix : {product.price}
                      </header>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="navButton">
            <button className="prev">
              <i className="material-icons">keyboard_arrow_left</i>
            </button>
            <button className="next">
              <i className="material-icons">keyboard_arrow_right</i>
            </button>
          </div>
        </div>

        <div
          className="font-cabin width-full align-center font-40"
          style={{ paddingTop: "150px" }}
        >
          <header>LES CATHEGORIES LES PLUS VISITES</header>
        </div>
        <div
          className="flex-container informationspanel"
          style={{ paddingBottom: "30px", marginBottom: "100px" }}
        >
          <div className="flex-item-left">
            <div className="flex-container ">
              <div className="flex-item-left" style={{ padding: "10px" }}>
                <div
                  style={{ paddingTop: "40px", paddingBottom: "40px" }}
                  className="zoomwhenhover shadowForMainSquareType width-full radius-10 bodyBackground align-center padding"
                >
                  <img
                    className=""
                    width="30%"
                    height="40%"
                    src="images/mouse.png"
                    alt=""
                  />
                  <header
                    style={{ paddingTop: "20px" }}
                    className="font-cabin font-20"
                  >
                    Mouse
                  </header>
                  <small className="form-text text-muted font-cabin ">
                    Voir plus{" "}
                  </small>
                </div>
                <div
                  style={{
                    paddingTop: "40px",
                    marginTop: "20px",
                    paddingBottom: "40px",
                  }}
                  className="zoomwhenhover shadowForMainSquareType width-full radius-10 bodyBackground align-center padding"
                >
                  <img
                    className=""
                    width="60%"
                    height="75%"
                    src="images/camera.png"
                    alt=""
                  />
                  <header
                    style={{ paddingTop: "20px" }}
                    className="font-cabin font-20"
                  >
                    Camera
                  </header>
                  <small className="form-text text-muted font-cabin ">
                    Voir plus{" "}
                  </small>
                </div>
              </div>
              <div className="flex-item-right" style={{ padding: "10px" }}>
                <div
                  style={{
                    paddingTop: "40px",
                    paddingBottom: "40px",
                    height: "100%",
                  }}
                  className="zoomwhenhover shadowForMainSquareType width-full radius-10 bodyBackground align-center padding"
                >
                  <img
                    className=""
                    width="100%"
                    height="80%"
                    src="images/phone.png"
                    alt=""
                  />
                  <header
                    style={{ paddingTop: "20px" }}
                    className="font-cabin font-20"
                  >
                    Téléphones
                  </header>
                  <small className="form-text text-muted font-cabin ">
                    Voir plus{" "}
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-item-right" style={{ padding: "10px" }}>
            <div
              style={{
                paddingTop: "0px",
                paddingBottom: "10px",
                height: "100%",
              }}
              className="zoomwhenhover shadowForMainSquareType width-full radius-10 bodyBackground align-center padding"
            >
              <img
                className=""
                width="60%"
                height="80%"
                src="images/pc.png"
                alt=""
              />
              <header
                style={{ paddingTop: "20px" }}
                className="font-cabin font-20"
              >
                Ordinateurs
              </header>
              <small className="form-text text-muted font-cabin ">
                Voir plus{" "}
              </small>
            </div>
          </div>
        </div>

        <div className="flex-container informationspanel">
          <div className="flex-item-left">
            <h1 className="font-cabin">PC PRO DZ</h1>
            <h3 className="font-cabin">ALGER, ALGERIE</h3>
            <br />
            <h3 className="font-cabin font-bold">
              Adresse : cité 1577 logts AADL Bt:06 N°16, Bab Ezzouar
            </h3>
            <h3 className="font-cabin font-bold">
              Coordonés : 36.7192013152, 3.19091677666
            </h3>
          </div>

          <div className="flex-item-right">
            <div
              id="carouselExampleIndicators2"
              className="carousel slide carousel-tt"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators2"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators2"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators2"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner radius-20">
                <div className="carousel-item active">
                  <img src="images/5.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="images/5.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="images/5.jpg" className="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators2"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators2"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div
            id="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d799.5464325552863!2d3.183110022113789!3d36.71810039597305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e516021906a95%3A0x4eead6555d1c4d87!2sPC%20PRO%20DZ!5e0!3m2!1sfr!2sdz!4v1647982967741!5m2!1sfr!2sdz"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
          ></div>
        </div>
      </div>

      <footer className="footer-dark" style={{ marginTop: "132px" }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3>
                A propos
                <br />
              </h3>
              <ul>
                <li>
                  <a href="emptyPage.html">xxxxxxxxxx</a>
                </li>
                <li>
                  <a href="emptyPage.html">xxxxxxxxxx</a>
                </li>
                <li>
                  <a href="emptyPage.html">xxxxxxxxxx</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3>Categories</h3>
              <ul>
                <li>
                  <a href="emptyPage.html">xxxxxxxxxx 1</a>
                </li>
                <li>
                  <a href="emptyPage.html">
                    xxxxxxxxxx 2<br />
                  </a>
                </li>
                <li>
                  <a href="emptyPage.html">
                    xxxxxxxxxx 3<br />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <h3>Company Name</h3>
              <p>xxxxxxxxxxxxxxxxxxxxxxx.</p>
            </div>
            <div className="col item social">
              <a href="emptyPage.html">
                <i className="icon ion-social-facebook"></i>
              </a>
              <a href="emptyPage.html">
                <i className="icon ion-social-twitter"></i>
              </a>
              <a href="emptyPage.html">
                <i className="icon ion-social-snapchat"></i>
              </a>
              <a href="emptyPage.html">
                <i className="icon ion-social-instagram"></i>
              </a>
            </div>
          </div>
          <p className="copyright">Pc Pro Dz © 2022</p>
        </div>
      </footer>
      <Helmet>
        <script src="js/product_carousel.js"></script>
      </Helmet>
    </div>
  );
}

export default App;
