import React from "react";

export default function Carouselitem(props) {
  const {product} = props;
  console.log(product.image[0]);
  return (
    <div class="productCarouselItem">
      <img
        class="radius-20 bodyBackground"
        width="100%"
        height="100%"
        src={product.image[0]}
        alt={product.name}
      />
      <a
        href={`/product/${product._id}`}
        class="notextdecoration blackcolor"
        key={product._id}
      >
        <div class="productinformationpanel info align-center font-20 pdgtp-5">
          <header class="font-cabin">{product._name}</header>
          <small class="form-text text-muted font-cabin ">
            {product.description}
          </small>
          <header class="font-cabin font-20 pdgtp-5">
            Prix : {product.price}
          </header>
        </div>
      </a>
    </div>
  );
}
