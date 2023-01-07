import { ProductServie } from "../services/productService.js";

export const getAllProducts = async (req, res) => {
  const products = await ProductServie.getAllProducts();
  res.send(products);
};

export const getProductByIdSelected = async(req,res)=>{
  res.send("OK")
}

export const getProductsSelected = async (req, res) => {
  const allProducts = await ProductServie.getProductsSelected();
  const newAllProduct = [];
  for (const product of allProducts) {
    newAllProduct.push({
      id: product._id.toString(),
      name: product.name,
      images: product.images[0],
      category: product.category,
      available: product.available,
      selling: product.selling
    });
  }
  console.log(newAllProduct);
  res.send(newAllProduct);
};

export const createProduct = async (req, res) => {
  console.log(req.body);
  const product = await ProductServie.createProduct(req.body);
  res.status(200).send(product);
};
 
export const updateProduct = async (req, res) => {
  const id = req.body._id;
  delete req.body._id;
  const product = await ProductServie.updateProductById(id, req.body);
  res.status(200).send(product);
};

export const deleteProductById = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  await ProductServie.deleteProductById(id);
  res.status(200).send("OK");
}; 

export const uploadImages = async (req, res) => {};
