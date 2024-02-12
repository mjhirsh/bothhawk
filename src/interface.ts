import { Betfair } from './Betfair'

const makeAdapter = async () => {
  const betfair = await new Betfair().withSession()
  const stream = betfair.createStream()
  stream.connect()

  setTimeout(() => {
    stream.authenticate()
  }, 3000)
  setTimeout(() => {
    stream.subscribe()
  }, 3000)

  // const res = betfair.bettingRequest(BettingEndpoint.listMarketCatalogue, {})
  // console.log('=================', res)
}

makeAdapter()
