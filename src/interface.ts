import { Adapter } from './Adapter'
import { BotHawkRequest } from './BotHawkRequest'

const makeAdapter = async () => {
  const request = await new BotHawkRequest().withSession()
  const a = await new Adapter(request)

  const res = a.getSomething()
  console.log('=================', res)
}

makeAdapter()
