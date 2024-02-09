import { Betfair } from './Betfair'
import { BettingEndpoint, MarketProjection } from './BetfairTypes'

describe('Betfair', () => {
  let betfair: Betfair
  beforeAll(async () => {
    betfair = await new Betfair().withSession()
  })

  test('bettingRequest', async () => {
    const params = {
      filter: { eventTypeIds: ['7'] },
      maxResults: 10,
      marketProjection: [
        MarketProjection.EVENT_TYPE,
        MarketProjection.MARKET_DESCRIPTION,
        MarketProjection.RUNNER_DESCRIPTION,
        MarketProjection.RUNNER_METADATA,
      ],
    }
    const value = await betfair.bettingRequest(
      BettingEndpoint.listMarketCatalogue,
      params
    )
    expect(value).toBeTruthy()
    expect(value).toHaveProperty('result')
  })
})
