import { Router } from "express";
import { deleteProductById, getAllProducts, createProduct, updateProduct, getAllProductsSelected } from "../controllers/product.controlller.js";

const router = Router()

router.get('/getProducts', getAllProducts)
router.get('/getProductsSelected',getAllProductsSelected)
router.post('/createProduct', createProduct)
// router.post('/updateProduct',updateProduct)
router.post('/update/:id',updateProduct)
router.post('/delete/:id',deleteProductById)
export default router
    