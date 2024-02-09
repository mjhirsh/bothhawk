import { Adapter } from './Adapter'
import { Betfair } from './Betfair'

const makeAdapter = async () => {
  const request = await new Betfair().withSession()
  const a = await new Adapter(request)

  const res = a.getSomething()
  console.log('=================', res)
}

makeAdapter()
