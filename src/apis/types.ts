/* eslint-disable @typescript-eslint/consistent-indexed-object-style */
export interface ExchangeRateResult {
  motd: MOTD
  success: boolean
  timeseries: boolean
  base: string
  start_date: Date
  end_date: Date
  rates: { [key: string]: { [key: string]: number } }
}

export interface MOTD {
  msg: string
  url: string
}
