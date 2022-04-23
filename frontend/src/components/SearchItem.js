import React from "react";

export default function SearchItem() {
  return (
    <div
      style={{ width: "250px", height: "400px" }}
      className="marginAuto card-container bodyBackground radius-10 mrgn-30"
    >
      <div
        className="radiusTop-20 bodyBackground imgbackground"
        style={{ backgroundImage: `url("/images/product2.png")` }}
      ></div>
      <div className="info align-center font-20 pdgtp-5">
        <header className="font-cabin">Asus vivobook</header>
        <small className="form-text text-muted font-cabin ">
          I5 82333 U - 8 GO RAM ....
        </small>

        <header className="font-cabin font-20 pdgtp-5">Prix : 150000</header>
      </div>
    </div>
  );
}
