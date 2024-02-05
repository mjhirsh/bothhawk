import https from 'https'
import fs from 'fs'
import fetch from 'node-fetch'

const url = 'https://identitysso-cert.betfair.com/api/certlogin'

const username = process.env.USER
const password = process.env.PASSWORD
const appKey = process.env.APPKEY

const data = `username=${username}&password=${password}`
const headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
  'X-Application': appKey,
}

const options = {
  key: fs.readFileSync('../secrets/client-2048.key'),
  cert: fs.readFileSync('../secrets/client-2048.crt'),
}

const sslAgent = new https.Agent(options)

const getSession = async (): Promise<string> => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      agent: sslAgent,
      body: data,
    })

    const responseBody = await response.json()
    return responseBody
  } catch (err) {
    console.log(err)
  }
}

export default getSession
