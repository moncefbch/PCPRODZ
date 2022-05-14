import {React, useEffect} from "react";
import Axios from "axios";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {detailsProduct} from "../actions/ProductAction";

export default function ProductPageAdmin(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  const {loading, error, product} = productDetails;
  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);
  if (!product) {
    return <div>Product not found</div>;
  }

  //deleteHandeler
  const deleteHandeler = async (id) => {
    await Axios.delete("/api/products/delete/" + id);
    props.history.push("/admin/catalogue");
  };

  return (
    <div>
      {loading ? (
        <div></div>
      ) : error ? (
        <div></div>
      ) : product ? (
        <section
          className="padding-y bg-white adminProductPage"
          style={{zoom: "1.25"}}
        >
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
            </div>
          </div>
          <div className="pdgtp-150 mrgnrgt-30 mrgnlft-30">
            <div className="d-flex flex-row-reverse">
              <Link to={"/admin"}>
                <button
                  style={{width: "150px"}}
                  type="submit"
                  className="p-2 font-cabin font-15 radius-25 loginOrRegisterButton "
                >
                  Editer
                </button>
              </Link>
              <button
                style={{width: "150px", marginRight: "15px"}}
                className="p-2 font-cabin font-15 radius-25 loginOrRegisterButton "
                onClick={deleteHandeler}
              >
                Supprimer
              </button>
            </div>
          </div>
        </section>
      ) : (
        <div></div>
      )}
    </div>
  );
}

/*
<div className="pdgtp-150 mrgnrgt-30 mrgnlft-30">
          <div className="d-flex flex-row-reverse">
            <Link to={"/admin"}>
              <button
                style={{ width: "150px" }}
                type="submit"
                className="p-2 font-cabin font-15 radius-25 loginOrRegisterButton "
              >
                Editer
              </button>
            </Link>
            <button
              style={{ width: "150px", marginRight: "15px" }}
              className="p-2 font-cabin font-15 radius-25 loginOrRegisterButton "
              onClick={deleteHandeler}
            >
              Supprimer
            </button>
          </div>
        </div>
         */
