import productsReducer from "./features/products/productsSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default store;
