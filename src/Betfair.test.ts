import { Betfair } from './Betfair'

test('withSession', async () => {
  const request = await new Betfair().withSession()
  expect(request).toBeTruthy()
})
