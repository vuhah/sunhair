import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    productsadded: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.productsadded.push(action.payload.productID, action.payload.weight);
    },
    removeProduct: (state, action) => {
      state.productsadded = state.productsadded.filter(
        (ele) => ele.productID !== action.payload.productID
      );
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
