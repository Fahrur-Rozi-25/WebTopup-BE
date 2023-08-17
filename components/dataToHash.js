import crypto from "crypto"
import { config } from "dotenv"
config()

export const hash = (refID) => {
    const data = process.env.APP_USERNAME_DIGIFLAZZ+process.env.APP_DEVKEY_DIGIFLAZZ+refID
    const md5 = crypto.createHash('md5').update(data).digest('hex')
    return md5
}
