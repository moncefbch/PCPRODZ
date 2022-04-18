import React from "react";
import { Helmet } from "react-helmet";
import data from "../data";

export default function ProductPage(props) {
  //const product equals to the product that has id equals to the id in the url
  const product = data.products.find(
    (product) => product._id === props.match.params.id
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex-container" style={{ margin: "5%" }}>
      <div
        className="flex-item-left-70 whitebackground radius-10"
        style={{ margin: "1%", marginTop: 0 }}
      >
        <header className="font-cabin font-40 mrgn-30">{product._name}</header>
        <hr
          style={{
            marginLeft: "50px",
            marginRight: "50px",
            marginTop: "50px",
          }}
        />
        <div className="flex-container" style={{ width: "100%" }}>
          <div className="flex-item-right-30 pdgtp-50">
            <div className="small-img-row">
              <div className="small-img-col">
                <img
                  alt=""
                  className="radius-20 pdng-8 small-img"
                  src={product.image}
                  width="100%"
                />
              </div>
              <div className="small-img-col">
                <img
                  alt=""
                  className="radius-20 pdng-8 small-img"
                  src={product.image}
                  width="100%"
                />
              </div>
              <div className="small-img-col">
                <img
                  alt=""
                  className="radius-20 pdng-8 small-img"
                  src={product.image}
                  width="100%"
                />
              </div>
              <div className="small-img-col">
                <img
                  alt=""
                  className="radius-20 pdng-8 small-img"
                  src={product.image}
                  width="100%"
                />
              </div>
            </div>
          </div>
          <div className="flex-item-left-70">
            <div className="col-sm-6 productMargin">
              <img
                alt=""
                className="radius-20 pdng-8"
                src={product.image}
                width="100%"
                id="productImg"
              />
            </div>
          </div>
        </div>
        <header
          style={{ marginBottom: "0px" }}
          className="font-cabin font-40 mrgn-30"
        >
          Fiche technique :
        </header>
        <div className="width-full pdng-50 pdgtp-5">
          <header className="font-bold font-20 font-cabin pdgtp-5">
            Carte graphique :
          </header>
          <header className="font-bold font-20 font-cabin pdgtp-5">
            Disque :
          </header>
          <header className="font-bold font-20 font-cabin pdgtp-5">
            Taille éctan :
          </header>
          <header className="font-bold font-20 font-cabin pdgtp-5">
            RAM :
          </header>
          <header className="font-bold font-20 font-cabin pdgtp-5">
            Processeur :
          </header>
          <header className="font-bold font-20 font-cabin pdgtp-5">
            Etat :
          </header>
          <header className="font-bold font-20 font-cabin pdgtp-5 pdgbtm-20">
            Description : {" " + product.description}
          </header>
        </div>
      </div>
      <div
        className="flex-item-right-30 whitebackground radius-10"
        style={{ height: "600px" }}
      >
        <header className="font-cabin font-40 mrgn-25 font-bold mrgnbtm-0 mrgn-30">
          {product.price}
        </header>
        <h5 className="font-cabin font-bold mrgn-30 mrgntp-0">Produit neuf</h5>
        <div className="align-center font-cabin font-20"> Quantité: </div>
        <div className="d-flex justify-content-center">
          <button
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
            1
          </header>
          <button
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
          <header style={{ marginLeft: "15px" }}> Ajouter Au Panier </header>
          <img alt="" src="/images/carticon.png" className="linkicon" />
        </button>
        <br />
        <div className="d-flex mrgnlft-30">
          <img src="/images/shiping.png" alt="" />
          <header className="mrgnlft-5 font-cabin font-10 font-bold">
            Livraison Disponible
          </header>
        </div>
        <img className="mrgnlft-30" src="/images/yaldine.png" alt="" />
        <br />
        <br />
        <header className="font-bold font-cabin pdgtp-5 mrgnlft-30">
          Besoin d'aide pour votre achat ?
        </header>
        <div className="d-flex mrgnlft-15">
          <img src="/images/phonecall.png" alt="" />
          <header className="mrgnlft-5 font-cabin font-13 font-bold">
            Appelez-nous : du samedi au jeudi de 9h à 18h
          </header>
        </div>
      </div>
      <Helmet>
        <script src="js/product_carousel.js"></script>
        <script src="js/product_gallery.js"></script>
      </Helmet>
    </div>
  );
}
