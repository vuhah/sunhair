import mongoose from "mongoose";

const companyInformation = mongoose.Schema({
  companyName: {
    type: String,
  },
  phones: [{ type: String }],
  socialChannel: {
    facebook: { type: String },
    instagram: { type: String },
    whatsapp: { type: String },
  },
  address: { type: String },
});

export const companyInformationDB = mongoose.Model(
  "companyInformation",
  companyInformation
);
