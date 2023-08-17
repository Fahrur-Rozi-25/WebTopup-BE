import axios from "axios"
import { config } from "dotenv"
config()

export const PriceDigiflazz = async () => {

    const url = process.env.APP_URL_DIGIFLAZZ+"/price-list"
    const data = {
    cmd : "prepaid",
    username: process.env.APP_USERNAME_DIGIFLAZZ
}

try {
    const response = await axios.post(url , data)
    const resData = response.data.data
    return resData
} catch (error) {
    return ("error: " , error);
}
}