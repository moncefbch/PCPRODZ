import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, saveInDb } from "../actions/cartActions";
import { Link } from "react-router-dom";
import ErrorMessageBox from "./ErrorMessageBox";

export default function Cart(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems, error } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  useEffect(() => {
    dispatch(saveInDb(userInfo, cartItems));
  }, [dispatch, userInfo, cartItems]);

  const removeFromCartHandler = (id) => {
    // delete action
    dispatch(removeFromCart(id));
  };
  const checkoutHandler = () => {
    props.history.push("/shipping");
    window.location.reload(false);
  };
  return (
    <div className=" flex-container pdng-100" style={{ margin: "3%" }}>
      <div
        style={{
          marginLeft: "0px",
          marginBottom: "0px",
          marginTop: "0px",
          marginBottom: "30px",
        }}
        className="font-cabin width-full font-40 font-bold "
      >
        <header>VOTRE PANIER</header>{" "}
      </div>
      <div className="flex-item-left-70  radius-10 mrgnrgt-50 ">
        <div className="width-full whitebackground radius-10 " style={{}}>
          {cartItems.length === 0 ? (
            <div
              className="whiteBackground radius-10"
              style={{ padding: "20px" }}
            >
              <div style={{ margin: "auto" }}>
                <ErrorMessageBox>
                  Cart is empty. <Link to="/">Go Shopping</Link>
                </ErrorMessageBox>
              </div>
            </div>
          ) : (
            <div>
              <aside
                style={{
                  marginTop: "0px",
                  marginBottom: "50px",
                }}
              >
                {cartItems.map((item) => (
                  <article
                    className=" whitebackground cardd-body border-bottom"
                    style={{
                      paddingTop: "30px",
                      borderStyle: "solid",
                      borderWidth: "1px",
                      borderColor: "#a8a7a7",
                      borderRadius: "10px",
                      paddingBottom: "30px",
                    }}
                  >
                    <div
                      className="row gy-3"
                      style={{
                        zoom: "1.4",
                        marginLeft: "30px",
                        marginRight: "30px",
                        paddingBottom: "0px",
                      }}
                    >
                      <div className="col-md-7">
                        <div className="itemside">
                          <Link
                            to={"/product/" + item.product}
                            className="aside"
                            style={{ zoom: "1.5" }}
                          >
                            <img
                              src={item.image[0]}
                              alt={item.name}
                              className="img-md img-thumbnail"
                            />
                          </Link>
                          <div
                            className="info"
                            style={{ marginTop: "10px", marginLeft: "20px" }}
                          >
                            <Link
                              className="font-18 title notextdecoration"
                              to={"/product/" + item.product}
                            >
                              {item.name}
                            </Link>
                            <small className=" font-15 text-muted font-cabin">
                              prix :{item.price} x {item.qty}
                            </small>
                            <div style={{ marginTop: "10px" }}>
                              <a
                                href="#"
                                className="font-15 font-bold notextdecoration "
                                style={{ color: "black" }}
                              >
                                {item.price * item.qty + " DA"}
                              </a>
                              <b className="dot mx-1"></b>
                              <button
                                style={{ all: "unset", cursor: "pointer" }}
                                onClick={() =>
                                  removeFromCartHandler(item.product)
                                }
                                className="btn-link text-danger noUnderline"
                              >
                                {"Supprimer "}
                                <i class="fa-solid fa-trash-can"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5" style={{ marginTop: "40px" }}>
                        <div
                          className="input-group input-spinner float-lg-end"
                          style={{ maxWidth: "140px", margin: "auto" }}
                        >
                          <button
                            onClick={() =>
                              dispatch(addToCart(item.product, item.qty - 1))
                            }
                            disabled={item.qty <= 1}
                            className="btn btn-outline-secondary btn-sm"
                            type="button"
                            style={{ height: "35px" }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="#999"
                              viewBox="0 0 25 31"
                            >
                              <path d="M19 13H5v-2h14v2z"></path>
                            </svg>
                          </button>
                          <header
                            type="text"
                            className="form-control text-center"
                          >
                            {item.qty}
                          </header>
                          <button
                            onClick={() =>
                              dispatch(addToCart(item.product, item.qty + 1))
                            }
                            disabled={item.qty >= item.countInStock}
                            className="btn btn-outline-secondary btn-sm"
                            type="button"
                            style={{ height: "35px" }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="#999"
                              viewBox="0 0 25 31"
                            >
                              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </aside>
            </div>
          )}
        </div>
      </div>
      <div
        className="flex-item-right-30 whitebackground radius-10"
        style={{
          paddingRight: "50px",
          paddingLeft: "50px",
          paddingTop: "50px",
          paddingBottom: "100px",
        }}
      >
        <header className="font-30 font-cabin font-bold">Votre ordre </header>
        <div className="d-flex justify-content-between">
          <small className="form-text font-20 text-muted font-cabin pdgtp-5">
            Articles :
          </small>
          <small className="form-text font-20 text-muted font-cabin pdgtp-5">
            {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
          </small>
        </div>
        <div className="d-flex justify-content-between">
          <small className="form-text font-20 text-muted font-cabin pdgtp-5">
            Nombre d'éléments :
          </small>
          <small className="form-text font-20 text-muted font-cabin pdgtp-5">
            {cartItems.reduce((a, c) => a + c.qty, 0)}
          </small>
        </div>
        <div>
          <div className="mrgntp-70">
            <hr className="width-full productMargin" />
            <div className="d-flex justify-content-between">
              <header className="font-30 font-cabin pdgtp-5 font-bold">
                TOTALE :
              </header>
              <header className="font-30 font-cabin pdgtp-5 font-bold">
                {cartItems.reduce((a, c) => a + c.price * c.qty, 0)} DZD
              </header>
            </div>
            <hr className="width-full productMargin" />
          </div>
          <button
            type="submit"
            onClick={checkoutHandler}
            disabled={cartItems.length === 0}
            className="font-cabin passcommandbutton"
            style={{ backgroundColor: "#4584FF", borderWidth: "0px" }}
          >
            Passer la commande
          </button>
        </div>
      </div>
    </div>
  );
}
