import authReducer from "./authSlice";
import cartReducer from "./cartSlice";
import productPathReducer from "./productPathSlice";

import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    productPath: productPathReducer,
  },
});
