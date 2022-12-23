import { productDB } from "../models/productModel.js";

export class ProductServie {
  static createProduct = async (body) => {
    const product = await productDB.create({
      name: body.name,
      category: body.category,
      information: body.information,
      definition: body.definition,
      characteristics: body.characteristics,
      instructionManual: body.instructionManual,
      available: body.available,
    });
    return product._id.toString();
  };
  static findProducts = async() => {
    const products = await productDB.find({}).select('_id name category available')
    return products
  }
} 

/* 
    "name":"a",
    "category":"b",
    "information":"c",
    "definition":"d",
    "characteristics":"d",
    "instructionManual":"e",
    "available":true
*/