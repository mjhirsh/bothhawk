import fs from 'fs'

const bfUsername = process.env.BF_USERNAME
const bfPassword = process.env.BF_PASSWORD
const bfAppKey = process.env.BF_APP_KEY
const bfKey = fs.readFileSync(process.env.BF_KEY_PATH)
const bfCert = fs.readFileSync(process.env.BF_CERT_PATH)

export { bfAppKey, bfCert, bfKey, bfPassword, bfUsername }
