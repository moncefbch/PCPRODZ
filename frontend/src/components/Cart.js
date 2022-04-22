import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { Link } from "react-router-dom";
import ErrorMessageBox from "./ErrorMessageBox";
import cartItem from "./CartItem";

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
  console.log(cart);
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
          <div>
            <h1>
              adding cart item id : productID :{productId} qty : {qty}{" "}
            </h1>
            <p></p>
          </div>
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
          {/*         {cartItems.length === 0 ? (
          <MessageBox>
            Cart is empty. <Link to="/">Go Shopping</Link>
          </MessageBox>
            ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.product}>
                <div className="row">
                  <div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="small"
                    ></img>
                  </div>
                  <div className="min-30">
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </div>
                  <div>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>${item.price}</div>
                  <div>
                    <button
                      type="button"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          )} */}
          {cartItems.length === 0 ? (
            <ErrorMessageBox>
              Cart is empty. <Link to="/">Go Shopping</Link>
            </ErrorMessageBox>
          ) : (
            <div>{cartItems.map((item) => cartItem(item))}</div>
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
            5849.37
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
                660900 DA
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
