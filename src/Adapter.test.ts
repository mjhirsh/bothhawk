import { Adapter } from './Adapter'
import { Betfair } from './Betfair'

test('basic', async () => {
  const request = await new Betfair().withSession()
  const a = await new Adapter(request)
  const value = a.getSomething()
  expect(value).toBeTruthy()
})
