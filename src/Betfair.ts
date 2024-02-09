import https from 'https'
import fetch from 'node-fetch'
import { bfAppKey, bfCert, bfKey, bfPassword, bfUsername } from './variables'

const headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
  'X-Application': bfAppKey,
}

const agent = new https.Agent({
  key: bfKey,
  cert: bfCert,
})

export class Betfair {
  constructor(private readonly session: string = '') {}

  async request(url: string, data: string): Promise<any> {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers,
        agent,
        body: data,
      })
      return await response.json()
    } catch (err) {
      console.log(err)
    }
  }
  async listMarketBook() {
    return await this.request(
      'https://api.betfair.com/exchange/betting/rest/v1.0/listMarketBook',
      ''
    )
  }

  async withSession(): Promise<Betfair> {
    const data = `username=${bfUsername}&password=${bfPassword}`
    const sessionUrl = 'https://identitysso-cert.Betfair.com/api/certlogin'
    const session = await this.request(sessionUrl, data)

    return new Betfair(session)
  }
}
