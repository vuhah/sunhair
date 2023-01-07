import {Router} from "express"
import { getOrders, updateOrder, deleteOrder } from "../controllers/order.controller.js"

const router = Router()

router.post('/updateOrder',updateOrder)
router.get('/getOrders', getOrders)
router.post('/deleteOrder', deleteOrder)

router.get("/hello",(req,res)=>{
    res.send("hello oerder product")
})
export default router