import { Betfair } from './Betfair'

const makeAdapter = async () => {
  const betfair = await new Betfair().withSession()
  betfair.connect()

  setTimeout(() => {
    betfair.authenticate()
  }, 3000)
  setTimeout(() => {
    betfair.subscribe()
  }, 3000)

  // const res = betfair.bettingRequest(BettingEndpoint.listMarketCatalogue, {})
  // console.log('=================', res)
}

makeAdapter()
