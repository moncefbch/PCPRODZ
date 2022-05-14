import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducers";
import {
  orderCreateReducer,
  orderListReducer,
  ordersListReducer,
  taiterOrderReducer,
} from "./reducers/orderReducers";

import {
  productListReducer,
  productCreateReducer,
  productCategoryListReducer,
  productMostRecentListReducer,
  allProducstListReducer,
} from "./reducers/productReducers";

import {
  userRegisterReducer,
  userSigninReducer,
} from "./reducers/userReducers";

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingAddress: localStorage.getItem("shippingAddress")
      ? JSON.parse(localStorage.getItem("shippingAddress"))
      : {},
  },
};
const reducer = combineReducers({
  productList: productListReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  cart: cartReducer,
  orderCreate: orderCreateReducer,
  productCreate: productCreateReducer,
  productCategoryList: productCategoryListReducer,
  productMostRecentList: productMostRecentListReducer,
  allProductList: allProducstListReducer,
  ordersList: ordersListReducer,
  orderList: orderListReducer,
  taiterOrder: taiterOrderReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
