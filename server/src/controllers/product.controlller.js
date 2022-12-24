import { ProductServie } from "../services/productService.js";

export const deleteProductById = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  await ProductServie.deleteProductById(id);
  res.send("OK");
};

export const getAllProducts = async (req, res) => {
  // const products = await ProductServie.queryAllProducts();
  // res.send(products);
  res.send("OK")
};

export const getAllProductsSelected = async (req, res) => {
  const allProducts = await ProductServie.findProducts();
  const newAllProduct = [];

  for (const product of allProducts) {
    newAllProduct.push({
      id: product._id.toString(),
      name: product.name,
      images: {
        filename: product.images[0].name,
        data: product.images[0].data.toString("base64"),
      },
      category: product.category,
      available: product.available,
    });
  }
  res.send(newAllProduct);
};

export const createProduct = async (req, res) => {
  const images = [];
  for (const file of Object.values(req.files)) {
    images.push({
      name: file.name,
      data: file.data,
    });
  }
  const data = {
    name: req.body.name,
    category: req.body.category,
    images: images,
    information: req.body.information,
    definition: req.body.definition,
    characteristics: req.body.characteristics,
    instructionManual: req.body.instructionManual,
    available: req.body.available,
  };

  const id = await ProductServie.createProduct(data);
  res.send(id);
};

export const updateProduct = async (req, res) => {
  const id = req.params.id;
  const images = [];
  if (req.files !== null) {
    for (const file of Object.values(req.files)) {
      images.push({
        name: file.name,
        data: file.data,
      });
    }
  }

  const data = {
    name: req.body.name,
    category: req.body.category,
    images: images,
    information: req.body.information,
    definition: req.body.definition,
    characteristics: req.body.characteristics,
    instructionManual: req.body.instructionManual,
    available: req.body.available,
  };

  console.log(data);
  console.log(id);
  const newProduct = await ProductServie.updateProductById(id, data);
  console.log(newProduct);
  res.send(newProduct);
}; 

export const uploadImages = async (req, res) => {};
