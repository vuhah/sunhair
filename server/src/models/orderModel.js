import mongoose from "mongoose";

const order = new mongoose.Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  country: {
    type: String,
  },
  email: {
    type: String,
  },
  whatsapp: {
    type: String,
  },
  orders: [
    {
      productId: {
        type: String
      },
      name: {
        type: String,
      },
      category: {
        type: String,
      },
      thumbnail: {
        type: String,
      },
      weight: Number,
    },
  ],
  time: {
    type: Date
  }
});

export const orderDB = mongoose.model("order", order);
