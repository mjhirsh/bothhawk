import https from 'https'
import fetch from 'node-fetch'
import { bfAppKey, bfCert, bfKey, bfPassword, bfUsername } from './variables'

const url = 'https://identitysso-cert.betfair.com/api/certlogin'

const data = `username=${bfUsername}&password=${bfPassword}`
const headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
  'X-Application': bfAppKey,
}

const options = {
  key: bfKey,
  cert: bfCert,
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
