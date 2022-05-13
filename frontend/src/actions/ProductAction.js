import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CATEGORY_LIST_SUCCESS,
  PRODUCT_CATEGORY_LIST_REQUEST,
  PRODUCT_CATEGORY_LIST_FAIL,
  PRODUCTS_MOStRECENT_LIST_REQUEST,
  PRODUCTS_MOStRECENT_LIST_SUCCESS,
  PRODUCTS_MOStRECENT_LIST_FAIL,
} from "../Constants/ProductsConstants";
import Axios from "axios";

export const listProducts = (text) => async (dispatch) => {
  dispatch({ type: PRODUCT_LIST_REQUEST });
  console.log(`/api/products/search?${text}`);
  try {
    // const { data } = await Axios.get(`/api/products/search?name=${name}&category=${category}`);
    const { data } = await Axios.get(`/api/products/search?${text}`);
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
};

export const createProduct = (product) => async (dispatch, getState) => {
  dispatch({ type: PRODUCT_CREATE_REQUEST, payload: product });
  const {
    userSignin: { userInfo },
  } = getState();
  console.log(userInfo);
  console.log(product);
  try {
    const { data } = await Axios.post("/api/admin/add", product, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({
      type: PRODUCT_CREATE_SUCCESS,
      payload: data.product,
    });
    console.log(data);
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PRODUCT_CREATE_FAIL, payload: message });
  }
};

export const listProductCategories = () => async (dispatch) => {
  dispatch({
    type: PRODUCT_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/products/categories`);
    dispatch({ type: PRODUCT_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const listReacentProducts = () => async (dispatch) => {
  dispatch({ type: PRODUCTS_MOStRECENT_LIST_REQUEST });

  try {
    const { data } = await Axios.get("/api/products/recent");
    dispatch({ type: PRODUCTS_MOStRECENT_LIST_SUCCESS, payload: data });
    console.log(JSON.stringify(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PRODUCTS_MOStRECENT_LIST_FAIL, payload: message });
  }
};
