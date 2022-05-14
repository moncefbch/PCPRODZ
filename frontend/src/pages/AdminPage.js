import React from "react";
import AddProduct from "../components/AddProduct";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Commandes from "../components/Commandes";
import Commande from "../components/Commande";
import Catalogue from "../components/Catalogue";
import ProductPageAdmin from "./ProductPageAdmin";

export default function AdminPage(props) {
  const array = [
    {
      img: "/images/addItem.png",
      text: "Ajouter une annonce ",
      ref: "/admin/",
    },
    {
      img: "/images/Catalogue.png",
      text: "Catalogue",
      ref: "/admin/catalogue",
    },
    {
      img: "/images/Commandes.png",
      text: "Commandes",
      ref: "/admin/commandes",
    },
    {
      img: "/images/messages.png",
      text: "Messages",
      ref: "/admin/messages",
    },
    {
      img: "/images/MesInfo.png",
      text: "Mes info",
      ref: "/admin/info",
    },
  ];
  return (
    <div className="flex-container" style={{ margin: "3%" }}>
      <div
        className="flex-item-right-30 whitebackground radius-10 mrgnrgt-50"
        style={{
          paddingTop: "15px",
          paddingBottom: "15px",
          marginBottom: "30px",
          height: "420px",
        }}
      >
        {array.map((item) => (
          <div>
            <div>
              <img
                src={item.img}
                alt="carticon"
                className="profilelinkicon mrgnrgt-50"
              />
              <a
                href={item.ref}
                className="mrgnlft-10 notextdecoration blackcolor font-bold font-18"
              >
                {item.text}
              </a>
            </div>
            <hr className="width-full"></hr>
          </div>
        ))}

        <div className="align-center">
          <header class="font-cabin font-25 pdgtp-5 font-bold">
            Se deconnecter
          </header>
        </div>
      </div>
      <div className="flex-item-left-70 whitebackground radius-10 ">
        <Router>
          <Route exact path="/admin/" component={AddProduct} />
          <Route exact path="/admin/commandes" component={Commandes} />
          <Route exact path="/admin/commandedetails:id" component={Commande} />
          <Route exact path="/admin/catalogue" component={Catalogue} />
          <Route exact path="/admin/product:id" component={ProductPageAdmin} />
          <Route exact path="/admin/edit:id" component={AddProduct} />
        </Router>
      </div>
    </div>
  );
}
