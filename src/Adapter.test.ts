import { Adapter } from './Adapter'
import { BotHawkRequest } from './BotHawkRequest'

test('basic', async () => {
  const request = await new BotHawkRequest().withSession()
  const a = await new Adapter(request)
  const value = a.getSomething()
  expect(value).toBeTruthy()
})
