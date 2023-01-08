import { Router } from "express";
import {
  getProductByIdSelected,
  deleteProductById,
  getAllProducts,
  createProduct,
  updateProduct,
  getProductsSelected,
  getProduct,
} from "../controllers/product.controlller.js";

const router = Router();

router.post("/getProduct", getProduct)
router.get("/getProducts", getAllProducts);
router.get("/getProductsSelected", getProductsSelected);
router.post("/createProduct", createProduct);
router.post("/update", updateProduct);
router.post("/delete/:id", deleteProductById);
router.get("./getProductByIdSelected", getProductByIdSelected);

export default router;

