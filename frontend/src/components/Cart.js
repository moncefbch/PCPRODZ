import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart , removeFromCart  } from "../actions/cartActions";
import { Link } from "react-router-dom";
import ErrorMessageBox from "./ErrorMessageBox";

export default function Cart(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems, error } = cart;
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  const removeFromCartHandler = (id) => {
    // delete action
    dispatch(removeFromCart(id));}
    console.log(cartItems);
  return (
    <div className="flex-container pdng-100" style={{ margin: "3%" }}>
      <div className="flex-item-left-70 mrgnrgt-50 pdgbtm-20">
        <div
          className="whitebackground radius-10"
          style={{
            width: "100%",
            paddingRight: "100px",
            paddingLeft: "100px",
            paddingTop: "50px",
            paddingBottom: "100px",
          }}
        >
          <div className="font-cabin width-full font-40 font-bold ">
            <header>ADRESSE DE LIVRAISON </header>
          </div>
          <div className="mrgntp-30">
            <header className="font-30 font-cabin">yazid yazid</header>
            <header className="font-30 font-cabin">123 Plae Grond Stret</header>
            <header className="font-30 font-cabin">Amizour, new yorkh</header>
            <header className="font-30 font-cabin">Algeria, africa </header>
          </div>
        </div>
        <div
          className="width-full whitebackground radius-10 mrgntp-30"
          style={{
            paddingRight: "100px",
            paddingLeft: "100px",
            paddingTop: "50px",
            paddingBottom: "100px",
          }}
        >
          <div className="font-cabin width-full font-40 font-bold ">
            <header>VOTRE PANIER</header>{" "}
          </div>
          {cartItems.length === 0 ? (
            <ErrorMessageBox>
              Cart is empty. <Link to="/">Go Shopping</Link>
            </ErrorMessageBox>
          ) : (
            <div>{cartItems.map((item) =>   
            <div class="container">
            <div class="row">
              <div class="col-sm">
                <div>
                  <img
                    src={item.image}
                    alt={item.name}
                    width={"200px"}
                    height={"250px"}
                  ></img>
                </div>
              </div>
              <div class="col-sm">
                <div>
                  <div className="font-cabin width-full font-30">
                    <header>{item.name}</header>
                  </div>
                  <small className="form-text font-20 text-muted font-cabin pdgtp-5">
                    White
                  </small>
                  <header className="font-25 font-cabin pdgtp-15">{item.price}</header>
                  <div className="font-20 font-cabin pdgtp-35">
                    prix :{item.price} x {item.qty}
                  </div>
                </div>
              </div>
              <div class="col-sm">
                  <div>
                    <div className="align-center font-cabin font-20"> Quantité: </div>
                    <div className="d-flex justify-content-center">
                      <button
                       onClick={() => dispatch(addToCart(item.product, item.qty - 1))}
                       disabled={item.qty <= 1}

                        className="font-cabin font-bold font-20 shadowForMainSquareType"
                        style={{
                          margin: "5px",
                          borderRadius: "10px",
                          width: "50px",
                          height: "30px",
                          borderWidth: "0px",
                          backgroundColor: "#262525",
                          color: "white",
                        }}
                      >
                        -
                      </button>
                      <header
                        className="font-cabin font-bold font-20"
                        style={{
                          margin: "5px",
                          paddingLeft: "20px",
                          paddingRight: "20px",
                        }}
                      >
                        {item.qty}
                      </header>
                      <button
                       onClick={() => dispatch(addToCart(item.product, item.qty + 1))}
                       disabled={item.qty >= item.countInStock}

                       className="font-cabin font-bold font-20 shadowForMainSquareType"
                        style={{
                          margin: "5px",
                          borderRadius: "10px",
                          width: "50px",
                          height: "30px",
                          borderWidth: "0px",
                          backgroundColor: "#262525",
                          color: "white",
                        }}
                      >
                        +
                      </button>
                    </div>
                    <button
                    onClick={() => removeFromCartHandler(item.product)}
                    className="d-flex font-cabin font-18 font-bold shadowForMainSquareType mrgntp-30 radius-10 align-center"
                    style={{
                      width: "80%",
                      height: "45px",
                      borderWidth: "0px",
                      marginLeft: "auto",
                      paddingTop: "10px",
                      marginRight: "auto",
                      color: "white",
                      backgroundColor: "#4584FF",
                    }}
                  >
                    <header style={{ marginLeft: "15px" }}>
                      {" "}
                      rani z9ou a frr{" "}
                    </header>
                    <img alt="" src="/images/carticon.png" className="linkicon" />
                  </button>
                  </div>
              </div>
            </div>
          </div>)}</div>
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
        <div class="d-flex justify-content-between">
          <small className="form-text font-20 text-muted font-cabin pdgtp-5">
            articles :
          </small>
          <small className="form-text font-20 text-muted font-cabin pdgtp-5">
          {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
          </small>
        </div>
        <div class="d-flex justify-content-between">
          <small className="form-text font-20 text-muted font-cabin pdgtp-5">
            les elements :
          </small>
          <small className="form-text font-20 text-muted font-cabin pdgtp-5">
          {cartItems.reduce((a, c) => a + c.qty, 0)}           
          </small>
        </div>
        <div class="d-flex justify-content-between">
          <small className="form-text font-20 text-muted font-cabin pdgtp-5">
            livraison:
          </small>
          <small className="form-text font-20 text-muted font-cabin pdgtp-5">
            6.99
          </small>
        </div>

        <div>
          <div className="mrgntp-70">
            <hr class="width-full productMargin" />
            <div class="d-flex justify-content-between">
              <header className="font-30 font-cabin pdgtp-5 font-bold">
                TOTALE :
              </header>
              <header className="font-30 font-cabin pdgtp-5 font-bold">
                {cartItems.reduce((a, c) => a + c.price * c.qty, 0)} DZD
              </header>
            </div>
            <hr class="width-full productMargin" />
          </div>
          <button type="submit" className="font-cabin passcommandbutton">
            Passer la commande
          </button>
        </div>
      </div>
    </div>
  );
}
