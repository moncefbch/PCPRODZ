import React from "react";
import { Link } from "react-router-dom";

export default function NewSearchItem(props) {
  const { product } = props;
  return (
    <div
      className="width-full simpleBorder radius-10"
      style={{ margin: "auto", marginTop: "35px", borderColor: "#e5e5e5" }}
    >
      <article className="cardd cardd-product-list">
        <div className="row g-0">
          <aside className="col-xl-3 col-md-4">
            <a href="#" className="img-wrap">
              <img src={product.image[0]} />
            </a>
          </aside>
          <div className="col-xl-9 col-md-8 border-start">
            <div className="cardd-body" style={{ margin: "15px" }}>
              <Link
                to={`/product/${product._id}`}
                className="title mb-2 font-20"
              >
                {product._name}
              </Link>
              <div className="price-wrap me-3">
                <span className="price h5"> {product.price} </span>
                <del className="price-old"> DA </del>
              </div>
              <div className="rating-wrap mb-2">
                <div className="rating-stars">
                  <li className="stars-active" style={{ width: "90%" }}>
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
                </div>
                <span className="label-rating text-muted font-15">
                  {product.countInStock + " en stock"}
                </span>
                <i className="dot"></i>
                <span className="label-rating text-success font-20">
                  Livraison disponible
                </span>
              </div>
              <p className="text-muted font-15">
                {product._name +
                  "   " +
                  product.processeur +
                  "   " +
                  product.ram +
                  "   " +
                  product.disque +
                  "   " +
                  product.gpu +
                  "   " +
                  product.description}
              </p>
              <Link
                style={{ marginTop: "30px", color: "#4584FF" }}
                to={`/product/${product._id}`}
                className="title mb-2 font-20"
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
