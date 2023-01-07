import { productDB } from "../models/productModel.js";

export class ProductServie {
  static createProduct = async (body) => {
    const product = await productDB.create({
      name: body.name,
      category: body.category,
      images: body.images,
      information: body.information,
      definition: body.definition,
      characteristics: body.characteristics,
      instructionManual: body.instructionManual,
      available: body.available,
      selling: body.selling,
    });
    return product;
  };
  static getProductsSelected = async () => {
    const products = await productDB
      .find({})
      .select("_id name images category available selling")
      .sort('-selling');
    return products;
  };
  static getAllProducts = async () => {
    const products = await productDB.find({});
    return products;
  };
  static updateProductById = async (id, body) => {
    const product = await productDB.findOneAndUpdate({ _id: id }, body);
    return product;
  };
  static deleteProductById = async (id) => {
    await productDB.findOneAndDelete({ _id: id });
  };

}

