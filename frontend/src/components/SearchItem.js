import React from "react";

export default function SearchItem(props) {
  const {product} = props;
  return (
    <div
      style={{width: "320px", height: "490px", borderColor: "#e5e5e5"}}
      className="marginAuto card-container simpleBorder  radius-10 mrgn-30"
    >
      <div
        className="radiusTop-20  imgbackground"
        style={{backgroundImage: `url(${product.image[0]})`}}
      ></div>
      <hr
        class="width-full productMargin"
        style={{height: " 1px", color: "#c7c7c7"}}
      />

      <div className="info font-20 pdgtp-5" style={{paddingLeft: "20px"}}>
        <small className="form-text text-muted font-cabin font-15">
          {product.category}
        </small>
        <header className="font-cabin font-20 pdgtp-5 font-bold">
          {product.price + " DA"}
        </header>
        <header>{product._name}</header>
        <small className="form-text text-muted font-cabin ">
          {product.processeur + "  " + product.ram}
        </small>
      </div>
    </div>
  );
}
