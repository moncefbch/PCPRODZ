import Axios from "axios";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVED_ITEM,
  CART_SAVE_ITEM_REQUEST,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_ADD_ITEM_FAIL, // dont forget to add this
} from "../Constants/cartConstants";

export const addToCart = (productId, qty) => async (dispatch, getState) => {
  const {data} = await Axios.get(`/api/products/get${productId}`);
  const {
    cart: {cartItems},
  } = getState();
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data._name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      product: data._id,
      qty,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
export const saveInDb = (userInfo, cartItems) => async (dispatch) => {
  dispatch({type: CART_SAVE_ITEM_REQUEST, payload: userInfo, cartItems});
  console.log({userInfo, cartItems});
  try {
    const {data} = await Axios.post("/api/users/cartsave", {
      userInfo,
      cartItems,
    });
    dispatch({
      type: CART_SAVED_ITEM,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CART_ADD_ITEM_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({type: CART_SAVE_SHIPPING_ADDRESS, payload: data});
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({type: CART_REMOVE_ITEM, payload: productId});
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
