import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import router from "./routes/mainRoutes.js"
import { ref_id } from "./components/ref_idGenerator.js"
import { transaction } from "./digiflazz/Transaction.js"
// import { getPrice } from "./controllers/getPrice.js"

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

app.listen(process.env.APP_PORT , () => {
    console.log(`app running on port ${process.env.APP_PORT}`);
})