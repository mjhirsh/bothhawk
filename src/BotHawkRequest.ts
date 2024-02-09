import https from 'https'
import fs from 'fs'
import fetch from 'node-fetch'
import {
  bfAppKey,
  bfCertPath,
  bfKeyPath,
  bfPassword,
  bfUsername,
} from './env_vars'

export class BotHawkRequest {
  private readonly headers: { [key: string]: string }
  private readonly agent: https.Agent

  constructor(private readonly session: string = '') {
    this.headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-Application': bfAppKey,
    }

    this.agent = new https.Agent({
      key: fs.readFileSync(bfKeyPath),
      cert: fs.readFileSync(bfCertPath),
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
    const data = `username=${bfUsername}&password=${bfPassword}`
    const sessionUrl = 'https://identitysso-cert.betfair.com/api/certlogin'
    const session = await this.request(sessionUrl, data)

    return new BotHawkRequest(session)
  }
}
