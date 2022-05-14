import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import ErrorMessageBox from "./ErrorMessageBox";
import {createOrder} from "../actions/orderActions";
import {ORDER_CREATE_RESET} from "../Constants/orderConstants";

export default function PlaceOrder(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const {userInfo} = userSignin;
  const cart = useSelector((state) => state.cart);
  const orderCreate = useSelector((state) => state.orderCreate);
  const {loading, success, error, order} = orderCreate;

  const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12
  cart.itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  );
  cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
  // cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice; //+ cart.taxPrice;

  const dispatch = useDispatch();
  console.log(cart.shippingAddress);
  const placeOrderHandler = () => {
    // TODO: dispatch place order action
    dispatch(createOrder({...cart, orderItems: cart.cartItems}));
  };
  useEffect(() => {
    if (success) {
      props.history.push(`/order/${order._id}`);
      dispatch({type: ORDER_CREATE_RESET});
    }
  }, [dispatch, order, props.history, success]);
  console.log(cart.cartItems);
  return (
    <div className="flex-container pdng-100" style={{margin: "3%"}}>
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
            <header>INFORMATIONS DE LIVRAISON </header>
          </div>
          <div className="mrgntp-30">
            <header className="font-30 font-cabin">
              {"Full Name : " +
                cart.shippingAddress.firstName +
                " " +
                cart.shippingAddress.lastName}
            </header>
            <header className="font-30 font-cabin">
              {"Wilaya : " + cart.shippingAddress.wilaya}
            </header>
            <header className="font-30 font-cabin">
              {"Address : " +
                cart.shippingAddress.address +
                "," +
                cart.shippingAddress.postalCode}
            </header>
            <header className="font-30 font-cabin">
              {"Phone : " + cart.shippingAddress.phone}
            </header>
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
            <header>Order Items</header>{" "}
          </div>
          <br />
          {cart.cartItems.length === 0 ? (
            <ErrorMessageBox>
              Cart is empty. <Link to="/">Go Shopping</Link>
            </ErrorMessageBox>
          ) : (
            <div>
              {cart.cartItems.map((item) => (
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
                          <Link
                            className="notextdecoration"
                            style={{color: "black", fontWeight: "bold"}}
                            to={"/product/" + item.product}
                          >
                            <header>{item.name}</header>
                          </Link>
                        </div>
                        <small className="form-text font-20 text-muted font-cabin pdgtp-5">
                          White
                        </small>
                        <header className="font-25 font-cabin pdgtp-15">
                          {item.price}
                        </header>
                        <div className="font-20 font-cabin pdgtp-35">
                          prix :{item.price} x {item.qty}
                        </div>
                      </div>
                    </div>
                    <div class="col-sm"></div>
                  </div>
                </div>
              ))}
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
        <div class="d-flex justify-content-between">
          <small className="form-text font-20 text-muted font-cabin pdgtp-5">
            Articles :
          </small>
          <small className="form-text font-20 text-muted font-cabin pdgtp-5">
            {cart.cartItems.reduce((a, c) => a + c.price * c.qty, 0) + 3000}
          </small>
        </div>
        <div class="d-flex justify-content-between">
          <small className="form-text font-20 text-muted font-cabin pdgtp-5">
            Nombre d'éléments :
          </small>
          <small className="form-text font-20 text-muted font-cabin pdgtp-5">
            {cart.cartItems.reduce((a, c) => a + c.qty, 0)}
          </small>
        </div>
        <div class="d-flex justify-content-between">
          <small className="form-text font-20 text-muted font-cabin pdgtp-5">
            Livraison:
          </small>
          <small className="form-text font-20 text-muted font-cabin pdgtp-5">
            3000
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
                {cart.cartItems.reduce((a, c) => a + c.price * c.qty, 0) + 3000}{" "}
                DZD
              </header>
            </div>
            <hr class="width-full productMargin" />
          </div>
          <button
            type="button"
            onClick={placeOrderHandler}
            disabled={cart.cartItems.length === 0}
            className="font-cabin passcommandbutton"
            style={{backgroundColor: "#4584FF", borderWidth: "0px"}}
          >
            Passer la commande
          </button>
        </div>
      </div>
    </div>
  );
}
