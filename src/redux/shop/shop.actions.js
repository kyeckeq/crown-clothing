import { ShopActionTypes } from "./shop.types";

export const loadShopData = (data) => ({
  type: ShopActionTypes.LOAD_SHOP_DATA,
  payload: data,
});
