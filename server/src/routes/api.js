import { Router } from "express";
import product from "./products.router.js"
import order from "./order.router.js"

const api = Router()

api.use('/order',order)
api.use('/product',product)

api.get('/hello',(req,res)=>{
    res.send("hello Sunhair")
})
export default api  