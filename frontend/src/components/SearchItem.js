import React from "react";
import { Link } from "react-router-dom";

export default function SearchItem(props) {
  const { product } = props;
  return (
    <div
      style={{ width: "320px", height: "490px", borderColor: "#e5e5e5" }}
      className="marginAuto card-container simpleBorder  radius-10 mrgn-30"
    >
      <div
        className="radiusTop-20  imgbackground"
        style={{ backgroundImage: `url(${product.image})` }}
      ></div>
      <hr
        class="width-full productMargin"
        style={{ height: " 1px", color: "#c7c7c7" }}
      />

      <div className="info font-20 pdgtp-5" style={{ paddingLeft: "20px" }}>
        <small className="form-text text-muted font-cabin font-15">
          {product.category}
        </small>
        <header className="font-cabin font-20 pdgtp-5 font-bold">
          {product.price + " DA"}
        </header>
        <header>
          <Link
            to={`/product/${product._id}`}
            className="font-cabin text-muted notextdecoration labeloflink active"
            style={{ color: "black" }}
          >
            {product._name}
          </Link>
        </header>
        <small className="form-text text-muted font-cabin ">
          {product.processeur + "  " + product.ram}
        </small>
      </div>
    </div>
  );
}
