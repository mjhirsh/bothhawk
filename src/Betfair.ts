import https from 'https'
import fetch from 'node-fetch'
import { bfAppKey, bfCert, bfKey, bfPassword, bfUsername } from './variables'
import { MarketCatalogue } from './BetfairTypes'

const agent = new https.Agent({
  key: bfKey,
  cert: bfCert,
})

export class Betfair {
  constructor(private session: string = '') {}

  async request(url: string, data: any): Promise<any> {
    const headers = this.headers()
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers,
        agent,
        body: data,
      })

      const result = await response.json()
      if (result.error) throw new Error(result.error.message)
      return result
    } catch (err) {
      console.log(err)
    }
  }

  async listMarketCatalogue(): Promise<{ result: MarketCatalogue }> {
    const url = `https://api.betfair.com/exchange/betting/json-rpc/v1/`
    const body = {
      jsonrpc: 2.0,
      method: 'SportsAPING/v1.0/listMarketCatalogue',
      params: {
        filter: { eventTypeIds: [7] },
        maxResults: 10,
        marketProjection: [
          'EVENT_TYPE',
          'MARKET_DESCRIPTION',
          'RUNNER_DESCRIPTION',
          'RUNNER_METADATA',
        ],
      },
    }
    return await this.request(url, JSON.stringify(body))
  }

  async withSession(): Promise<Betfair> {
    const data = `username=${bfUsername}&password=${bfPassword}`
    const sessionUrl = 'https://identitysso-cert.Betfair.com/api/certlogin'
    const session = await this.request(sessionUrl, data)
    return new Betfair(session.sessionToken)
  }

  headers(): {
    'Content-Type': 'application/x-www-form-urlencoded'
    'X-Application': string
    'X-Authentication': string
  } {
    return {
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-Application': bfAppKey,
      'X-Authentication': this.session,
    }
  }
}
