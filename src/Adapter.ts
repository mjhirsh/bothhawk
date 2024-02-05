import { BotHawkRequest } from './BotHawkRequest'

export class Adapter {
  constructor(private request: BotHawkRequest) {}

  async getSomething(): Promise<any> {
    return await this.request.request(
      'https://api.betfair.com/exchange/betting/rest/v1.0/listMarketBook',
      ''
    )
  }
}
