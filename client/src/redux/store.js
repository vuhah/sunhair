import authReducer from "./authSlice";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";

import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    product: productReducer,
  },
});
