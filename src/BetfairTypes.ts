export type MarketCatalogue = {
  marketId: string
  marketName: string
  marketStartTime?: string
  description?: MarketDescription
  totalMatched?: number
  runners?: RunnerCatalogue[]
  eventType?: EventType
  competition?: Competition
  event?: Event
}

export type RunnerCatalogue = {
  selectionId: number
  runnerName: string
  handicap: number
  sortPriority: number
  metadata: {
    [key: string]: string
  }
}

export type EventType = {
  id: string
  name: string
}

export type MarketDescription = {
  persistenceEnabled: boolean
  bspMarket: boolean
  marketTime: Date
  suspendTime: Date
  settleTime?: Date
  bettingType: string
  turnInPlayEnabled: boolean
  marketType: string
  regulator: string
  marketBaseRate: number
  discountAllowed: boolean
  wallet?: string
  rules?: string
  rulesHasDate?: boolean
  eachWayDivisor?: number
  clarifications?: string
  lineRangeInfo?: MarketLineRangeInfo
  raceType?: string
  priceLadderDescription?: PriceLadderDescription
}

export type Competition = {
  id: string
  name: string
}

export type MarketLineRangeInfo = {
  maxUnitValue: number
  minUnitValue: number
  interval: number
  marketUnit: string
}

export type PriceLadderDescription = {
  type: PriceLadderType
}

export enum PriceLadderType {
  CLASSIC = 'CLASSIC',
  FINEST = 'FINEST',
  LINE_RANGE = 'LINE_RANGE',
}
