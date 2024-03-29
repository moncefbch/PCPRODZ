import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_RESET,
  PRODUCT_CATEGORY_LIST_REQUEST,
  PRODUCT_CATEGORY_LIST_SUCCESS,
  PRODUCT_CATEGORY_LIST_FAIL,
  PRODUCTS_MOStRECENT_LIST_REQUEST,
  PRODUCTS_MOStRECENT_LIST_SUCCESS,
  PRODUCTS_MOStRECENT_LIST_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_RESET,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../Constants/ProductsConstants";

export const productListReducer = (
  state = {loading: true, products: []},
  action
) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return {loading: true};
    case PRODUCT_LIST_SUCCESS:
      return {loading: false, products: action.payload};
    case PRODUCT_LIST_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
export const productCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return {loading: true};
    case PRODUCT_CREATE_SUCCESS:
      return {loading: false, success: true, product: action.payload};
    case PRODUCT_CREATE_FAIL:
      return {loading: false, error: action.payload};
    case PRODUCT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const productCategoryListReducer = (
  state = {loading: true, products: []},
  action
) => {
  switch (action.type) {
    case PRODUCT_CATEGORY_LIST_REQUEST:
      return {loading: true};
    case PRODUCT_CATEGORY_LIST_SUCCESS:
      return {loading: false, categories: action.payload};
    case PRODUCT_CATEGORY_LIST_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};

export const productMostRecentListReducer = (
  state = {loading: true, products: []},
  action
) => {
  switch (action.type) {
    case PRODUCTS_MOStRECENT_LIST_REQUEST:
      return {loading: true};
    case PRODUCTS_MOStRECENT_LIST_SUCCESS:
      return {loading: false, products: action.payload};
    case PRODUCTS_MOStRECENT_LIST_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};

export const allProducstListReducer = (
  state = {loading: true, products: []},
  action
) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return {loading: true};
    case PRODUCT_LIST_SUCCESS:
      return {loading: false, products: action.payload};
    case PRODUCT_LIST_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
export const productUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_UPDATE_REQUEST:
      return {loading: true};
    case PRODUCT_UPDATE_SUCCESS:
      return {loading: false, success: true};
    case PRODUCT_UPDATE_FAIL:
      return {loading: false, error: action.payload};
    case PRODUCT_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = {product: {}, loading: true},
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return {loading: true};
    case PRODUCT_DETAILS_SUCCESS:
      return {loading: false, product: action.payload};
    case PRODUCT_DETAILS_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
