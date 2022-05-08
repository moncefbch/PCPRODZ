import Axios from "axios";
import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_EDIT_INFO_REQUEST,
  USER_EDIT_INFO_SUCCESS,
  USER_EDIT_INFO_FAIL,
} from "../Constants/userConstants";

export const register = (name, email, password, wilaya) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: { email, password } });
  try {
    const { data } = await Axios.post("/api/users/register", {
      name,
      email,
      password,
      wilaya,
    });
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await Axios.post("/api/users/signin", { email, password });
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (cartItems) {
      const newCartItems = cartItems.filter(
        (cartItem) =>
          !data.cart.find((item) => item.product === cartItem.product)
      );
      data.cart = [...data.cart, ...newCartItems];
    }
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
    localStorage.setItem("cartItems", JSON.stringify(data.cart));
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("cartItems");
  localStorage.removeItem("shippingAddress");
  dispatch({ type: USER_SIGNOUT });
  document.location.href = "/login";
};

export const edit = (id, name, lastname, phone) => async (dispatch) => {
  dispatch({
    type: USER_EDIT_INFO_REQUEST,
    payload: { id, name, lastname, phone },
  });
  try {
    const { data } = await Axios.post("/api/users/edit", {
      id,
      name,
      lastname,
      phone,
    });

    //data has id , name, lastname , phone
    //edit these attributes in userInfo local storage
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    userInfo.name = data.name;
    userInfo.lastname = data.lastname;
    userInfo.phone = data.phone;

    dispatch({ type: USER_EDIT_INFO_SUCCESS, payload: userInfo });
    console.log(userInfo);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  } catch (error) {
    dispatch({
      type: USER_EDIT_INFO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

/*create action that posts this json {
     "id": "ffffffffffffffffffffffff",
     "oldpassword": "123456",
     "newpassword": "123456789"
 } */

export const changePassword =
  (id, oldpassword, newpassword) => async (dispatch) => {
    dispatch({
      type: USER_SIGNIN_REQUEST,
      payload: { id, oldpassword, newpassword },
    });
    try {
      const { data } = await Axios.post("/api/users/changepassword", {
        id,
        oldpassword,
        newpassword,
      });
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: data.user });
      localStorage.setItem("userInfo", JSON.stringify(data.user));
    } catch (error) {
      dispatch({
        type: USER_SIGNIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
