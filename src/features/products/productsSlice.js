import { createSlice } from "@reduxjs/toolkit";

const initialStateproducts = {
  products: []
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialStateproducts,
  reducers: {
      add(state, action) {
        state.products = [...state.products, ...action.payload];
      },
  },
});

export const { add } = productsSlice.actions;

export default productsSlice.reducer;
