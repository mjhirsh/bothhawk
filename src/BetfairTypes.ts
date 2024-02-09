export type MarketFilter = {
  textQuery?: string
  eventTypeIds?: string[]
  eventIds?: string[]
  competitionIds?: string[]
  marketIds?: string[]
  venues?: string[]
  bspOnly?: boolean
  turnInPlayEnabled?: boolean
  inPlayOnly?: boolean
  marketBettingTypes?: MarketBettingType[]
  marketCountries?: string[]
  marketTypeCodes?: string[]
  marketStartTime?: MarketTimeRange
  withOrders?: OrderStatus[]
  raceTypes?: string[]
}

export declare enum MarketBettingType {
  ODDS = 'ODDS',
  LINE = 'LINE',
  RANGE = 'RANGE',
  ASIAN_HANDICAP_DOUBLE_LINE = 'ASIAN_HANDICAP_DOUBLE_LINE',
  ASIAN_HANDICAP_SINGLE_LINE = 'ASIAN_HANDICAP_SINGLE_LINE',
  FIXED_ODDS = 'FIXED_ODDS',
}

export type MarketTimeRange = {
  from: string
  to: string
}

export declare enum OrderStatus {
  PENDING = 'PENDING',
  EXECUTION_COMPLETE = 'EXECUTION_COMPLETE',
  EXECUTABLE = 'EXECUTABLE',
  EXPIRED = 'EXPIRED',
}

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

export enum MarketProjection {
  COMPETITION = 'COMPETITION',
  EVENT = 'EVENT',
  EVENT_TYPE = 'EVENT_TYPE',
  MARKET_START_TIME = 'MARKET_START_TIME',
  MARKET_DESCRIPTION = 'MARKET_DESCRIPTION',
  RUNNER_DESCRIPTION = 'RUNNER_DESCRIPTION',
  RUNNER_METADATA = 'RUNNER_METADATA',
}

export declare enum MarketSort {
  MINIMUM_TRADED = 'MINIMUM_TRADED',
  MAXIMUM_TRADED = 'MAXIMUM_TRADED',
  MINIMUM_AVAILABLE = 'MINIMUM_AVAILABLE',
  MAXIMUM_AVAILABLE = 'MAXIMUM_AVAILABLE',
  FIRST_TO_START = 'FIRST_TO_START',
  LAST_TO_START = 'LAST_TO_START',
}

export enum BettingEndpoint {
  listMarketCatalogue = 'listMarketCatalogue',
}

export type ListMarketCatalogueParams = {
  filter: MarketFilter
  marketProjection?: MarketProjection[]
  marketSort?: MarketSort
  maxResults: number
}

export type BettingParams = ListMarketCatalogueParams
export type BettingResponse = MarketCatalogue
