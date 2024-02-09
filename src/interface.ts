import { Betfair } from './Betfair'
import { BettingEndpoint } from './BetfairTypes'

const makeAdapter = async () => {
  const betfair = await new Betfair().withSession()

  // const res = betfair.bettingRequest(BettingEndpoint.listMarketCatalogue, {})
  // console.log('=================', res)
}

makeAdapter()
