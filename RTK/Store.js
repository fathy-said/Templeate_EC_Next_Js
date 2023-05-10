import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./Reducer/ProductReducer";
import SearchReducer from "./Reducer/SearchReducer";
import CategoryReducer from "./Reducer/CategoryReducer";
import DetailsReducer from "./Reducer/DetailsReducer";
import CartReducer from "./Reducer/CartReducer";
export let Store = configureStore({
  reducer: {
    ProductReducer,
    SearchReducer,
    CategoryReducer,
    DetailsReducer,
    CartReducer,
  }
})
