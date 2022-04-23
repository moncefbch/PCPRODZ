import React from "react";
import { Link } from "react-router-dom";

export default function SearchItem(props) {
  const { product } = props;
  return (
    <div
      style={{ width: "250px", height: "400px" }}
      className="marginAuto card-container bodyBackground radius-10 mrgn-30"
    >
      <div
        className="radiusTop-20 bodyBackground imgbackground"
        style={{ backgroundImage: `url(${product.image})` }}
      ></div>
      <div className="align-center info font-20 pdgtp-5">
        <header>
          <Link
            to={`/product/${product._id}`}
            className="font-cabin notextdecoration labeloflink active"
            style={{ color: "black" }}
          >
            {product._name}
          </Link>
        </header>
        <small className="form-text text-muted font-cabin ">
          {product.processeur + "  " + product.ram}
        </small>

        <header className="font-cabin font-20 pdgtp-5">
          {"prix : " + product.price}
        </header>
      </div>
    </div>
  );
}
