import https from 'https'
import fetch from 'node-fetch'
import tls from 'tls'
import { bfAppKey, bfCert, bfKey, bfPassword, bfUsername } from './variables'
import { BettingEndpoint, BettingParams, BettingResponse } from './BetfairTypes'

const agent = new https.Agent({
  key: bfKey,
  cert: bfCert,
})

export class Betfair {
  constructor(private session: string = '', private client: any = 0) {}

  connect() {
    /*	Socket connection options */
    const options = {
      host: 'stream-api.betfair.com',
      port: 443,
    }

    /*	Establish connection to the socket */

    this.client = tls.connect(options, function () {
      console.log('Connected')
    })

    this.client.on('data', function (data: any) {
      console.log('Received: ' + data)
    })

    this.client.on('close', function () {
      console.log('Connection closed')
    })

    this.client.on('error', function (err: any) {
      console.log('Error:' + err)
    })
  }

  authenticate() {
    /*	Send authentication message */
    const message = {
      op: 'authentication',
      id: 1,
      appKey: bfAppKey,
      session: this.session,
    }
    const json = JSON.stringify(message)
    this.client.write(`${json}\r\n`)
  }

  async subscribe() {
    this.client.write('{"op":"orderSubscription", "id": "2"}\r\n')
  }

  async request<T>(url: string, body: any): Promise<undefined | T> {
    const headers = this.headers()
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers,
        agent,
        body,
      })

      const result = await response.json()
      if (result.error) console.log(result)
      if (result.error) throw new Error(result.error.message)
      return result
    } catch (err) {
      console.log(err)
    }
  }

  async bettingRequest(
    endpoint: BettingEndpoint,
    params: BettingParams
  ): Promise<BettingResponse> {
    const url = `https://api.betfair.com/exchange/betting/json-rpc/v1/`
    const body = {
      jsonrpc: 2.0,
      method: `SportsAPING/v1.0/${endpoint}`,
      params,
    }
    return await this.request<Promise<BettingResponse>>(
      url,
      JSON.stringify(body)
    )
  }

  async withSession(): Promise<Betfair> {
    const data = `username=${bfUsername}&password=${bfPassword}`
    const sessionUrl = 'https://identitysso-cert.Betfair.com/api/certlogin'
    const session = await this.request<Promise<{ sessionToken: string }>>(
      sessionUrl,
      data
    )
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
