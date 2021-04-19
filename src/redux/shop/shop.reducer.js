import { ShopActionTypes } from "./shop.types";

import SHOP_DATA from "./shop.data";

const INITIAL_STATE = {
  collections: SHOP_DATA,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action) {
    case ShopActionTypes.LOAD_SHOP_DATA:
      break;
      
    default:
      return state;
  }
};

export default shopReducer;
