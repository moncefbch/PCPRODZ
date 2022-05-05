import React from "react";
import AddProduct from "../components/AddProduct";

export default function AdminPage(props) {
  const array = [
    {
      img: "/images/addItem.png",
      text: "Ajouter une annonce ",
    },
    {
      img: "/images/Catalogue.png",
      text: "Catalogue",
    },
    {
      img: "/images/Commandes.png",
      text: "Commandes",
    },
    {
      img: "/images/messages.png",
      text: "Messages",
    },
    {
      img: "/images/MesInfo.png",
      text: "Mes info",
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
              <a className="mrgnlft-10 notextdecoration blackcolor font-bold font-18">
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
        {AddProduct(props) }
      </div>
    </div>
  );
}
