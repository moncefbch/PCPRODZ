import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {detailsProduct} from "../actions/ProductAction";

export default function NewProductPage(props) {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  const {loading, error, product} = productDetails;
  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  const decqty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };
  const incqty = () => {
    if (qty < product.countInStock) {
      setQty(qty + 1);
    }
  };

  const addToCartHandler = () => {
    props.history.push(`/cart/${product._id}?qty=${qty}`);
  };
  return (
    <div>
      {loading ? (
        <div></div>
      ) : error ? (
        <div></div>
      ) : product ? (
        <div>
          {" "}
          <section className="padding-y bg-white" style={{zoom: "1.25"}}>
            <div className="container">
              <div className="row">
                <aside className="col-lg-5">
                  <article className="gallery-wrap">
                    <a href="#" className="img-big-wrap">
                      <img src={product.image[0]} className="rounded" />
                    </a>
                    <div className="thumbs-wrap" style={{marginTop: "-60px"}}>
                      {product.image.map((image) => (
                        <a href="#" className="item-thumb">
                          <img
                            src={image}
                            alt={product.image}
                            key={product._id}
                          />
                        </a>
                      ))}
                    </div>
                  </article>
                </aside>
                <div className="col-lg-4">
                  <article>
                    <p
                      className="title mb-1 font-25 font-bold"
                      style={{marginTop: "25px"}}
                    >
                      {product._name +
                        "   " +
                        product.processeur +
                        "   " +
                        product.ram +
                        "   " +
                        product.disque +
                        "   " +
                        product.gpu}
                    </p>
                    <div className="">
                      <div className="">
                        <li style={{width: "80%"}} className="stars-active">
                          <img
                            src="bootstrap5-ecommerce/images/misc/stars-active.svg"
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            height="520"
                            src="bootstrap5-ecommerce/images/misc/starts-disable.svg"
                            alt=""
                          />
                        </li>
                      </div>
                      <span className="label-rating text-muted">
                        <i className="fa fa-shopping-basket"></i>{" "}
                        {product.countInStock + " En Stock"}
                      </span>
                    </div>
                    <p className="text-success">
                      <i className="fa fa-check"></i> in Stock
                    </p>
                    <hr />
                    <div className="list-dots mb-4">
                      <li>{"Carte graphique : " + product.gpu}</li>
                      <li>{"Disque :" + product.disque}</li>
                      <li>{"RAM :" + product.ram}</li>
                      <li>{"Processeur :" + product.processeur}</li>
                      <li>{"Description :" + product.description}</li>
                    </div>
                  </article>
                </div>
                <aside className="col-lg-3">
                  <div className="cardd shadow">
                    <div
                      className=""
                      style={{
                        padding: "30px",
                        height: "430px",
                      }}
                    >
                      <div className="mb-3">
                        <var className="price font-25">
                          {product.price + " DA"}
                        </var>
                        <span className="text-muted">/Pour Produit</span>
                      </div>
                      <form style={{marginTop: "50px"}}>
                        <div className="d-flex align-items-center mb-3">
                          <div
                            className="input-group"
                            style={{maxWidth: "180px", margin: "auto"}}
                          >
                            <button
                              onClick={decqty}
                              className="btn "
                              type="button"
                              style={{height: "33px"}}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="#999"
                                viewBox="0 5 25 31"
                              >
                                <path d="M19 13H5v-2h14v2z" />
                              </svg>
                            </button>
                            <header className="form-control text-center">
                              {qty}
                            </header>
                            <button
                              onClick={incqty}
                              className="btn  "
                              type="button"
                              style={{height: "33px"}}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="#999"
                                viewBox="0 5 25 31"
                              >
                                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </form>
                      <div className="mb-4">
                        <a
                          href="#"
                          className="btn btn-primary w-100 mb-2"
                          onClick={addToCartHandler}
                        >
                          Ajouter Au Panier
                        </a>
                      </div>
                      <div className="list-icon">
                        <li>
                          <i className="icon fa fa-truck"></i> Livraison
                          Disponible 58 Wilaya
                        </li>
                        <li>
                          <i class="icon fa fa-lock"></i> payment securisé
                        </li>
                        <li style={{marginLeft: "-35px"}}>
                          <img src="/images/yaldine.png" />
                        </li>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
