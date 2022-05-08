import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
} from "../Constants/ProductsConstants";
import Axios from "axios";
export const listProducts = () => async (dispatch) => {
  dispatch({ type: PRODUCT_LIST_REQUEST });
  try {
    const { data } = await Axios.get("/api/products");
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

/*cart: []
createdAt: "2022-05-04T06:51:45.764Z"
email: "amine@estin.dz"
isAdmin: true
lastname: "hamoutene"
name: "mouayed"
password: "$2a$08$SnCMkJs6SPceE2nWJcTetOJT17XKWpw60ybQtPvCRf5S3mbEsllMq"
phone: "7777777777"
updatedAt: "2022-05-07T21:41:30.375Z"
wilaya: "15-Tizi-Ouzou"
__v: 0
_id: "62722281fc0bfb84e235878a"

cart: []
email: "amine@estin.dz"
isAdmin: true
lastname: "hamoutene"
name: "amine"
phone: "7777777777"
token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mjc2ZTgzOWZlN2JjMmY2Y2VlMDY1MTQiLCJlbWFpbCI6ImFtaW5lQGVzdGluLmR6IiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjUxOTYwMDE0LCJleHAiOjE2NTQ1NTIwMTR9.HV4Ece1-5nJr9gP3rTB-9WKrwhHkm29UifGzQ_1kDR0"
wilaya: "15-Tizi-Ouzou"
_id: "6276e839fe7bc2f6cee06514"*/
