import { createSlice } from "@reduxjs/toolkit";

export const productPathSlice = createSlice({
  name: "productPath",
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
      state.path = "HOME / " + action.payload.path.toUpperCase() + " /";
      state.currentProducts = state.initialProducts.filter(
        (ele) => ele.category === action.payload.codepath
      );
    },
    returnRootPath: (state) => {
      state.path = "HOME /";
      state.currentProducts = state.initialProducts;
    },
  },
});

export const { setInitialProducts, returnRootPath, newCategory } =
  productPathSlice.actions;
export default productPathSlice.reducer;
