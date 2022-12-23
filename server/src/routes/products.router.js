import { Router } from "express";
import { getAllProducts, createProduct, updateProduct } from "../controllers/product.controlller.js";

const router = Router()

router.get('/getProducts',getAllProducts)
router.post('/createProduct', createProduct)
router.post('/updateProduct',updateProduct)

export default router
 