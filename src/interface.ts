import { Betfair } from './Betfair'

const makeAdapter = async () => {
  const betfair = await new Betfair().withSession()

  const res = betfair.listMarketCatalogue()
  console.log('=================', res)
}

makeAdapter()
