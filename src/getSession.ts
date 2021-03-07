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
  key: fs.readFileSync('../client-2048.key'),
  cert: fs.readFileSync('../client-2048.crt'),
}

const sslAgent = new https.Agent(options)

const makeRequest = async (): Promise<void> => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      agent: sslAgent,
      body: data,
    })

    const responseBody = await response.json()
    console.log(responseBody)
  } catch (err) {
    console.log(err)
  }
}

makeRequest()
