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
    });
    return product._id.toString();
  };
  static findProducts = async() => {
    const products = await productDB.find({}).select('_id name images category available')
    return products
  }
  static queryAllProducts = async() => {
    const products = await(productDB.find({})).select('_id name category information definition characteristics instructionManual available')
    return products
  }
  static updateProductById = async(id,body)=>{
    const product = await productDB.findOneAndUpdate({_id:id},body)
    return product
  }
  static deleteProductById = async(id) =>{
    await productDB.findOneAndDelete({_id:id})
  }
} 
 