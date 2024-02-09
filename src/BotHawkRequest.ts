import https from 'https'
import fs from 'fs'
import fetch from 'node-fetch'

export class BotHawkRequest {
  private readonly headers: { [key: string]: string }
  private readonly agent: https.Agent

  constructor(private readonly session: string = '') {
    this.headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-Application': process.env.BF_APP_KEY,
    }

    this.agent = new https.Agent({
      key: fs.readFileSync(process.env.BF_KEY_PATH),
      cert: fs.readFileSync(process.env.BF_CERT_PATH),
    })
  }

  async request(url: string, data: string): Promise<any> {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: this.headers,
        agent: this.agent,
        body: data,
      })
      return await response.json()
    } catch (err) {
      console.log(err)
    }
  }

  async withSession(): Promise<BotHawkRequest> {
    const data = `username=${process.env.username}&password=${process.env.password}`
    const sessionUrl = 'https://identitysso-cert.betfair.com/api/certlogin'
    const session = await this.request(sessionUrl, data)

    return new BotHawkRequest(session)
  }
}
