import { Betfair } from './Betfair'

describe('Betfair', () => {
  let betfair: Betfair
  beforeAll(async () => {
    betfair = await new Betfair().withSession()
  })

  test('listMarketCatalogue', async () => {
    const value = await betfair.listMarketCatalogue()
    expect(value).toBeTruthy()
    expect(value).toHaveProperty('result')
  })
})
