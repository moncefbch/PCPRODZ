import React from "react";

export default function AddProduct() {
  const array = [
    "Nom",
    "Prix",
    "Cathegorie",
    "Marque",
    "Processeur",
    "RAM",
    "Carte Graphique",
    "Stockage",
    "Type disque",
    "Systeme d'exploitation",
    "Etat",
  ];
  return (
    <div>
      <div className="pdng-15">
        <header className="font-cabin font-bold font-30 mrgnlft-15">
          Ajouter une annonce
        </header>
      </div>
      <div className="pdng-45">
        {array.map((text) => (
          <div className="form-group pdngbtm-10">
            <label
              for="exampleInputEmail1"
              className="font-bold font-cabin font-18"
            >
              {text}
            </label>
            <input type="text" className="InputField font-cabin font-10" />
          </div>
        ))}
        <label
          style={{ cursor: "pointer", marginTop: "50px" }}
          for="file-input"
        >
          <div
            style={{
              backgroundColor: "#F1F1F1",
              width: "350px",
              height: "350px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src="/images/AddImage.png"
              width={"20%"}
              height={"20%"}
              style={{
                margin: "auto",
              }}
            />
          </div>
        </label>
        <input style={{ display: "none" }} id="file-input" type="file" />
      </div>
    </div>
  );
}
