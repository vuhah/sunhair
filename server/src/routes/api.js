import { Router } from "express";
import test from "./test.router.js";
import product from "./products.router.js"
const api = Router()

api.use('/test',test)
api.use('/product',product)

export default api  