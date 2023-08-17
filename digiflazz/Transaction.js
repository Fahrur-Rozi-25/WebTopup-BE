import axios from "axios";
import { ref_id } from "../components/ref_idGenerator.js";
import { hash } from "../components/dataToHash.js";
import { config } from "dotenv"
config()

export const transaction = async (skuCode , customer) => {

    const refID = ref_id()
    const hashing = hash(refID)

    const url = process.env.APP_URL_DIGIFLAZZ+"/transaction"
    const data = {
        username: process.env.APP_USERNAME_DIGIFLAZZ,
        buyer_sku_code: skuCode,
        customer_no: customer,
        ref_id: refID,
        testing: true,
        sign: hashing
    }

    try {
    const response = await axios.post(url , data)
    const resData = response.data.data
    return resData;
        
    } catch (error) {
        return("error" , error)
    }
}