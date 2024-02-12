import tls from 'tls'

export class BetfairStream {
  constructor(
    private readonly session: string = '',
    private readonly bfAppKey: string = '',
    private client: any = 0
  ) {}

  connect() {
    const options = {
      host: 'stream-api.betfair.com',
      port: 443,
    }

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
    const message = {
      op: 'authentication',
      id: 1,
      appKey: this.bfAppKey,
      session: this.session,
    }
    const json = JSON.stringify(message)
    this.client.write(`${json}\r\n`)
  }

  async subscribe() {
    this.client.write('{"op":"orderSubscription", "id": "2"}\r\n')
  }
}
