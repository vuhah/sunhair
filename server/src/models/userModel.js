import mongoose from "mongoose";

const user = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
  },
  country: {
    type: String,
  },
  whatsapp: {
    type: String,
  },
  orders: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: "product",
      },
      quantity: Number,
    },
  ],
});

export const userdb = mongoose.model("user", user);
