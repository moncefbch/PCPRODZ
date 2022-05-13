import Axios from "axios";
import { CART_EMPTY } from "../Constants/cartConstants";
import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAIL,
  ORDER_DETAIL_REQUEST,
  ORDER_DETAIL_SUCCESS,
  ORDER_DETAIL_FAIL,
} from "../Constants/orderConstants";

export const createOrder = (order) => async (dispatch, getState) => {
  dispatch({ type: ORDER_CREATE_REQUEST, payload: order });
  console.log(order);
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await Axios.post("/api/orders", order, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: ORDER_CREATE_SUCCESS, payload: data.order });
    dispatch({ type: CART_EMPTY });
    localStorage.removeItem("cartItems");
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listOrders = () => async (dispatch, getState) => {
  dispatch({ type: ORDER_LIST_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get("/api/orders", {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: ORDER_LIST_SUCCESS, payload: data });
    console.log(data);
  } catch (error) {
    dispatch({ type: ORDER_LIST_FAIL, payload: error.message });
  }
};

export const listOrder = (orderId) => async (dispatch, getState) => {
  dispatch({ type: ORDER_DETAIL_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get(`/api/orders/get${orderId}`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: ORDER_DETAIL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ORDER_DETAIL_FAIL, payload: error.message });
  }
};
export const taiterOrder = (orderId) => async (dispatch, getState) => {
  console.log(orderId);
  dispatch({ type: ORDER_DETAIL_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(
      `/api/orders/${orderId}` /*, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }*/
    );
    console.log(data);
    dispatch({ type: ORDER_DETAIL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ORDER_DETAIL_FAIL, payload: error.message });
  }
};
