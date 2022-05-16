import React from "react";
import { Link } from "react-router-dom";

export default function SearchItem(props) {
  const { product } = props;
  //create const imm to store the product.image[0] and replace \ with \\
  const imm = product.image[0].replace(/\\/g, "\\\\");
  console.log(`url(${imm}})`);

  return (
    <Link
      to={`/product/${product._id}`}
      style={{ width: "320px", height: "490px", borderColor: "#e5e5e5" }}
      className=" notextdecoration marginAuto card-container simpleBorder  radius-10 mrgn-30"
    >
      <img className="radiusTop-20  imgbackground" src={product.image[0]}></img>

      <hr
        class="width-full productMargin"
        style={{ height: " 1px", color: "#c7c7c7" }}
      />
      <div className="info font-20 pdgtp-5" style={{ paddingLeft: "20px" }}>
        <small className="form-text text-muted font-cabin font-15">
          {product.category}
        </small>
        <header
          className="font-cabin notextdecoration labeloflink active font-23 font-bold"
          style={{ color: "black" }}
        >
          {product._name}
        </header>
        <header
          className="font-cabin font-15 pdgtp-5 font-bold"
          style={{ color: "black" }}
        >
          {product.price + " DA"}
        </header>

        <small className="form-text text-muted font-cabin ">
          {product.processeur + "  " + product.ram}
        </small>
      </div>
    </Link>
  );
}
