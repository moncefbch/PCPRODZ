import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Axios from "axios";

export default function ProductPage(props) {
  const [product, setProducts] = useState([]);
  const [qty, setQty] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await Axios.get(
        "/api/products/get" + props.match.params.id
      );
      setProducts(data);
    };
    fetchData();
  }, []);
  if (!product) {
    return <div>Product not found</div>;
  }
  const decqty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };
  const incqty = () => {
    if (qty < product.countInStock) {
      setQty(qty + 1);
    }
  };

  const addToCartHandler = () => {
    props.history.push(`/cart/${product._id}?qty=${qty}`);
  };
  return (
    <div className="flex-container" style={{ margin: "5%" }}>
      <div
        className="flex-item-left-70 whitebackground radius-10 mrgnrgt-50"
        style={{ marginBottom: "30px" }}
      >
        <header className="font-cabin font-40 mrgn-30">{product._name}</header>
        <hr
          style={{
            marginLeft: "50px",
            marginRight: "50px",
            marginTop: "50px",
          }}
        />
        <div className="width-full">
          <aside className="col-lg-6" style={{ margin: "auto" }}>
            <article className="gallery-wrap">
              <div className="img-big-wrap img-thumbnail">
                <a href="#">
                  <img height="520" src={product.image} />
                </a>
              </div>
              <div className="thumbs-wrap">
                <a href="#" className="item-thumb">
                  <img width="60" height="60" src={product.image} />
                </a>
                <a href="#" className="item-thumb">
                  <img width="60" height="60" src={product.image} />
                </a>
                <a href="#" className="item-thumb">
                  <img width="60" height="60" src={product.image} />
                </a>
                <a href="#" className="item-thumb">
                  <img width="60" height="60" src={product.image} />
                </a>
                <a href="#" className="item-thumb">
                  <img width="60" height="60" src={product.image} />
                </a>
              </div>
            </article>
          </aside>
        </div>

        <header
          style={{ marginBottom: "0px" }}
          className="font-cabin font-40 mrgn-30 font-bold"
        >
          Fiche technique :
        </header>
        <div className="width-full pdng-50 pdgtp-5">
          <header className="font-bold font-20 font-cabin pdgtp-5">
            {"Carte graphique : " + product.gpu}
          </header>
          <header className="font-bold font-20 font-cabin pdgtp-5">
            {"Disque :" + product.disque}
          </header>
          <header className="font-bold font-20 font-cabin pdgtp-5">
            {"Taille éctan :"}
          </header>
          <header className="font-bold font-20 font-cabin pdgtp-5">
            {"RAM :" + product.ram}
          </header>
          <header className="font-bold font-20 font-cabin pdgtp-5">
            {"Processeur :" + product.processeur}
          </header>
          <header className="font-bold font-20 font-cabin pdgtp-5">
            {"Etat :"}
          </header>
          <header className="font-bold font-20 font-cabin pdgtp-5 pdgbtm-20">
            {"Description :" + product.description}
          </header>
        </div>
      </div>
      <div
        className="flex-item-right-30 whitebackground radius-10"
        style={{
          height: "350px",
        }}
      >
        <header className="font-cabin font-40 mrgn-25 font-bold mrgnbtm-0 mrgn-30">
          {product.price}
        </header>
        <h5 className="font-cabin font-bold mrgn-30 mrgntp-0">Produit neuf</h5>
        {product.countInStock > 0 ? (
          <div>
            <div className="align-center font-cabin font-20"> Quantité: </div>
            <div className="d-flex justify-content-center">
              <button
                onClick={decqty}
                className="font-cabin font-bold font-20 shadowForMainSquareType"
                style={{
                  margin: "5px",
                  borderRadius: "10px",
                  width: "50px",
                  height: "30px",
                  borderWidth: "0px",
                  backgroundColor: "#262525",
                  color: "white",
                }}
              >
                -
              </button>
              <header
                className="font-cabin font-bold font-20"
                style={{
                  margin: "5px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                {qty}
              </header>
              <button
                onClick={incqty}
                className="font-cabin font-bold font-20 shadowForMainSquareType"
                style={{
                  margin: "5px",
                  borderRadius: "10px",
                  width: "50px",
                  height: "30px",
                  borderWidth: "0px",
                  backgroundColor: "#262525",
                  color: "white",
                }}
              >
                +
              </button>
            </div>
            <button
              onClick={addToCartHandler}
              className="d-flex font-cabin font-18 font-bold shadowForMainSquareType mrgntp-30 radius-10 align-center"
              style={{
                width: "80%",
                height: "45px",
                borderWidth: "0px",
                marginLeft: "auto",
                paddingTop: "10px",
                marginRight: "auto",
                color: "white",
                backgroundColor: "#4584FF",
              }}
            >
              <header style={{ marginLeft: "15px" }}>
                {" "}
                Ajouter Au Panier{" "}
              </header>
              <img alt="" src="/images/carticon.png" className="linkicon" />
            </button>
          </div>
        ) : (
          <div>khlasselna hed lpc dsl a la7viv</div>
        )}
        <br />
      </div>
      <Helmet>
        <script src="js/product_carousel.js"></script>
        <script src="js/product_gallery.js"></script>
      </Helmet>
    </div>
  );
}
