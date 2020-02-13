import {applyMiddleware, createStore} from "redux";
import ShopReducer from "./ShopReducer";
import CommonReducer from "./CommonReducer";
import CartReducer from "./CartReducer";
import AsyncMiddleware from "./AsyncMiddleware";

const SportsStoreDataStore = createStore(
  CommonReducer(ShopReducer, CartReducer), applyMiddleware(AsyncMiddleware)
);

export default SportsStoreDataStore;
