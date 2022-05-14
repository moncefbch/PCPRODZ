import { React, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Axios from "axios";
import { Link } from "react-router-dom";

export default function ProductPageAdmin(props) {
  const [product, setProducts] = useState([]);
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

  //deleteHandeler
  const deleteHandeler = async (id) => {
    await Axios.delete("/api/products/delete/" + id);
    props.history.push("/admin/catalogue");
  };

  return (
    <div className="flex-container" style={{ margin: "3%", marginTop: "0" }}>
      <div
        className=" whitebackground radius-10"
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
            <div className="col-sm-6 productMargin mrgntp-30">
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
        <header className="font-cabin font-40 mrgn-25 font-bold mrgnbtm-0 mrgn-30">
          {"Prix : " + product.price}
        </header>
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
        <div className="pdgtp-150 mrgnrgt-30 mrgnlft-30">
          <div className="d-flex flex-row-reverse">
            <Link to={"/admin"}>
              <button
                style={{ width: "150px" }}
                type="submit"
                className="p-2 font-cabin font-15 radius-25 loginOrRegisterButton "
              >
                Editer
              </button>
            </Link>
            <button
              style={{ width: "150px", marginRight: "15px" }}
              className="p-2 font-cabin font-15 radius-25 loginOrRegisterButton "
              onClick={deleteHandeler}
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>

      <Helmet>
        <script src="js/product_carousel.js"></script>
        <script src="js/product_gallery.js"></script>
      </Helmet>
    </div>
  );
}
