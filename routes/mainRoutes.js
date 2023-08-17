import express from "express"
import { main } from "../controllers/index.js"
import { table } from "../controllers/TablePrice.js"
import { test } from "../controllers/testing.js"


const router = express.Router()

router.get("/" , main)
router.get("/table" , table)
router.get('/trs' , test)




export default router