import mongoose from "mongoose";

const products = mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  category: {
    type: String,
  },
  images: [
    {
      name: String,
      data: Buffer,
    },
  ],
  information: {
    type: String,
  },
  definition: {
    type: String,
  },
  characteristics: {
    type: String,
  },
  instructionManual: {
    type: String,
  },
  available: {
    type: Boolean,
  },
});

export const productDB = mongoose.model("products", products);
