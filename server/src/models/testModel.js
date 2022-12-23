import mongoose from "mongoose";

const testSchema = mongoose.Schema({
  name: {type: String},
  data: {type: Buffer},
});

export const test = mongoose.model('test', testSchema)