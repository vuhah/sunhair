import { Router } from "express";
import { upload } from "../controllers/test.controller.js";

const router = Router()

router.post('/test2',upload)

export default router 