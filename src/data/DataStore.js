import { ShopReducer } from "./ShopReducer";
import { createStore } from "redux";

export const SportsStoreDataStore = createStore(ShopReducer);
