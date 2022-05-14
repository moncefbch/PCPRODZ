import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function NewProductPage(props) {
  const [product, setProducts] = useState([]);
  const [qty, setQty] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await Axios.get(
        "/api/products/get" + props.match.params.id
      );
      setProducts(data);
    };
    fetchData();
  }, []);
  if (!product) {
    return <div>Product not found</div>;
  }
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
    <section className="padding-y bg-white" style={{ zoom: "1.25" }}>
      <div className="container">
        <div className="row">
          <aside className="col-lg-5">
            <article className="gallery-wrap">
              <a href="#" className="img-big-wrap">
                <img src={product.image} className="rounded" />
              </a>
              <div className="thumbs-wrap" style={{ marginTop: "-60px" }}>
                <a href="#" className="item-thumb">
                  <img src={product.image} />
                </a>
                <a href="#" className="item-thumb">
                  <img src={product.image} />
                </a>
                <a href="#" className="item-thumb">
                  <img src={product.image} />
                </a>
                <a href="#" className="item-thumb">
                  <img src={product.image} />
                </a>
                <a href="#" className="item-thumb">
                  <img src={product.image} />
                </a>
              </div>
            </article>
          </aside>
          <div className="col-lg-4">
            <article>
              <p
                className="title mb-1 font-25 font-bold"
                style={{ marginTop: "25px" }}
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
                  <li style={{ width: "80%" }} className="stars-active">
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
                  <var className="price font-25">{product.price + " DA"}</var>
                  <span className="text-muted">/Pour Produit</span>
                </div>
                <form style={{ marginTop: "50px" }}>
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="input-group"
                      style={{ maxWidth: "180px", margin: "auto" }}
                    >
                      <button
                        onClick={decqty}
                        className="btn "
                        type="button"
                        style={{ height: "33px" }}
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
                        style={{ height: "33px" }}
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
                    <i className="icon fa fa-truck"></i> Livraison Disponible 58
                    Wilaya
                  </li>
                  <li>
                    <i class="icon fa fa-lock"></i> payment securisé
                  </li>
                  <li style={{ marginLeft: "-35px" }}>
                    <img src="/images/yaldine.png" />
                  </li>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
