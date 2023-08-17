import { transaction } from "../digiflazz/Transaction.js"

export const test = async (req  ,res) => {

    const data1 = "xld10"
    const data2 = "087800001233"

    const buying = await transaction(data1 , data2)
    res.status(200).json(buying)
}
