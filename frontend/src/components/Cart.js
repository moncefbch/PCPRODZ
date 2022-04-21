import React from "react";
import CartItem from "./CartItem";

export default function Cart() {
  return (
    <div className="flex-container pdng-100" style={{ margin: "3%" }}>
      <div className="flex-item-left-70 mrgnrgt-50 pdgbtm-20">
        <div
          className="whitebackground radius-10"
          style={{
            width: "100%",
            paddingRight: "100px",
            paddingLeft: "100px",
            paddingTop: "50px",
            paddingBottom: "100px",
          }}
        >
          <div className="font-cabin width-full font-40 font-bold ">
            <header>ADRESSE DE LIVRAISON </header>
          </div>
          <div className="mrgntp-30">
            <header className="font-30 font-cabin">yazid yazid</header>
            <header className="font-30 font-cabin">123 Plae Grond Stret</header>
            <header className="font-30 font-cabin">Amizour, new yorkh</header>
            <header className="font-30 font-cabin">Algeria, africa </header>
          </div>
        </div>
        <div
          className="width-full whitebackground radius-10 mrgntp-30"
          style={{
            paddingRight: "100px",
            paddingLeft: "100px",
            paddingTop: "50px",
            paddingBottom: "100px",
          }}
        >
          <div className="font-cabin width-full font-40 font-bold ">
            <header>VOTRE PANIER</header>
          </div>
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
      </div>
      <div
        className="flex-item-right-30 whitebackground radius-10"
        style={{
          paddingRight: "50px",
          paddingLeft: "50px",
          paddingTop: "50px",
          paddingBottom: "100px",
        }}
      >
        <header className="font-30 font-cabin font-bold">Votre ordre </header>
        <div class="d-flex justify-content-between">
          <small className="form-text font-20 text-muted font-cabin pdgtp-5">
            articles :
          </small>
          <small className="form-text font-20 text-muted font-cabin pdgtp-5">
            5849.37
          </small>
        </div>
        <div class="d-flex justify-content-between">
          <small className="form-text font-20 text-muted font-cabin pdgtp-5">
            livraison:
          </small>
          <small className="form-text font-20 text-muted font-cabin pdgtp-5">
            6.99
          </small>
        </div>

        <div>
          <div className="mrgntp-70">
            <hr class="width-full productMargin" />
            <div class="d-flex justify-content-between">
              <header className="font-30 font-cabin pdgtp-5 font-bold">
                TOTALE :
              </header>
              <header className="font-30 font-cabin pdgtp-5 font-bold">
                660900 DA
              </header>
            </div>
            <hr class="width-full productMargin" />
          </div>
          <button type="submit" className="font-cabin passcommandbutton">
            Passer la commande
          </button>
        </div>
      </div>
    </div>
  );
}
