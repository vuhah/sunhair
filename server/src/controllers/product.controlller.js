import { ProductServie } from "../services/productService.js";
import fs from "fs";

export const getAllProducts = async (req, res) => {
  const allProducts = await ProductServie.findProducts()
  for (const product of allProducts){
    product._id = product._id.toString()
    fs.readFile(`.src/assets/images/${product._id}`,(err,data)=>{
      if (err) console.log(err);
      product.img = "data:image/png;base64, " + data.toString('base64')
    })
  }
  res.send(allProducts);
};

export const createProduct = async (req, res) => {
  const id = await ProductServie.createProduct(req.body);
  fs.mkdir(`./src/assets/images/${id}`, (err) => {
    console.log(err);
  });
  for (const file of Object.values(req.files)) {
    fs.writeFileSync(`./src/assets/images/${id}/${file.name}`, file.name, file.data);
  } 
  res.send(id);
}; 
  
export const updateProduct = async (req, res) => {};

export const uploadImages = async (req, res) => {};
