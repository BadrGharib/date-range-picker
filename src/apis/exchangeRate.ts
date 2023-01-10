import { ExchangeRateResult } from './types'
import moment from 'moment'

/**
 * get exchange rate from start date to end date
 * @param startDate Date
 * @param endDate Date
 * @returns Promise<ExchangeRateResult> ExchangeRateResult
 */
export const _getexchangeRate = async (
  startDate: Date,
  endDate: Date
): Promise<ExchangeRateResult> => {
  const url = `https://api.exchangerate.host/timeseries?start_date=${
                 moment(startDate).format('YYYY-MM-DD').toString()
                }&end_date=${
                 moment(endDate).format('YYYY-MM-DD').toString()
                }`
  const res = await fetch(url)
  if (!res.ok) {
    const message = `An error has occured: ${res.status}`
    throw new Error(message)
  }
  const response: ExchangeRateResult = await res.json()
  return response
}
