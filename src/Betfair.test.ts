import { Betfair } from './Betfair'

test('withSession', async () => {
  const request = await new Betfair().withSession()
  expect(request).toBeTruthy()
})

test('listMarketBook', async () => {
  const betfair = await new Betfair().withSession()
  const value = betfair.listMarketBook()
  expect(value).toBeTruthy()
})
