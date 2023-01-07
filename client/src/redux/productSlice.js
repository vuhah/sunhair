import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    path: "HOME /",
    initialProducts: [],
    currentProducts: [],
  },
  reducers: {
    setInitialProducts: (state, action) => {
      state.initialProducts = action.payload.products;
      state.currentProducts = action.payload.products;
    },
    newCategory: (state, action) => {
      state.path = "HOME  /  " + action.payload.path.toUpperCase() + " / ";
      state.currentProducts = state.initialProducts.filter(
        (ele) => ele.category === action.payload.codepath
      );
    },
    returnRootPath: (state) => {
      state.path = "HOME /  ";
      state.currentProducts = state.initialProducts;
    },
    setCurrentProductOrderly: (state, action) => {
      state.currentProducts = action.payload.products;
    },
  },
});

export const {
  setInitialProducts,
  returnRootPath,
  newCategory,
  setCurrentProductOrderly,
} = productSlice.actions;
export default productSlice.reducer;
