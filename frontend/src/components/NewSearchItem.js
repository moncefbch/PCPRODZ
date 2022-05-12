import React from "react";

export default function NewSearchItem(props) {
  const { product } = props;
  return (
    <div class="col-lg-3 col-sm-6 col-12">
      <div className="cardd cardd-product-grid">
        <div className="img-wrap">
          <img src={product.image} />
        </div>
        <div className="info-wrap border-top">
          <div className="rating-wrap mb-1">
            <ul className="rating-stars">
              <li className="stars-active" style={{ width: "70%" }}>
                <img
                  src="bootstrap5-ecommerce/images/misc/stars-active.svg"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="bootstrap5-ecommerce/images/misc/starts-disable.svg"
                  alt=""
                />
              </li>
            </ul>
            <span className="label-rating text-warning">4.2</span>
          </div>
          <div className="price-wrap">
            <strong className="price">$495.99</strong>
          </div>
          <a href="#" className="title">
            Canon camera model EOS-1200 with optical lens
          </a>
        </div>
      </div>
    </div>
  );
}
