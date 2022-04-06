import React from "react";
import Carouselitem from "./Carouselitem";
import data from "../data";

export default function NewProductsSection() {
  return (
    <div>
      <div
        className="font-cabin width-full align-center font-40"
        style={{ paddingTop: "150px" }}
      >
        <header>NOUVEAUTES</header>
      </div>
      <div className="carousel-container radius-20">
        <div className="carousel-inner">
          <div className="track">
            {data.products.map((product) => (
              <Carouselitem key={product._id} product={product}></Carouselitem>
            ))}
          </div>
        </div>
        <div className="navButton">
          <button className="prev">
            <i className="material-icons">keyboard_arrow_left</i>
          </button>
          <button className="next">
            <i className="material-icons">keyboard_arrow_right</i>
          </button>
        </div>
      </div>
    </div>
  );
}
