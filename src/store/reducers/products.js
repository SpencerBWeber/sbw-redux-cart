import { ADD_TO_CART } from "../actions/products";
import mockData from "../../mockData";

const initialState = {
  products: mockData,
  cart: [],
  total: 0
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("ADD TO CART ACTION FIRED", action.productId);
      return state;
    default:
      return state;
  }
};

export default productsReducer;
