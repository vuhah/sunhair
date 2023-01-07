import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    productsadded: [],
  },
  reducers: {
    addProduct: (state, action) => {
      if (
        !state.productsadded.find(
          (e) => e.productID === action.payload.productID
        )
      ) {
        state.productsadded.push({
          productID: action.payload.productID,
          weight: action.payload.weight,
          thumbnail: action.payload.thumbnail,
          name: action.payload.name,
          category: action.payload.category
        });
      }
    },
    removeProduct: (state, action) => {
      state.productsadded = state.productsadded.filter(
        (ele) => ele.productID !== action.payload.productID
      );
    },
    setProducts : (state, action) => {
      state.productsadded = action.payload.products
    }
  },
});

export const { addProduct, removeProduct, setProducts } = cartSlice.actions;
export default cartSlice.reducer;
