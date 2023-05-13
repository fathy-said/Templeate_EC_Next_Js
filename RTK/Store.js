import { configureStore } from "@reduxjs/toolkit";
import SearchReducer from "./Reducer/SearchReducer";
import CartReducer from "./Reducer/CartReducer";
export let Store = configureStore({
  reducer: {
    SearchReducer,

    CartReducer,
  }
})
