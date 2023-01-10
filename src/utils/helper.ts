/* eslint-disable @typescript-eslint/no-base-to-string */
import moment from 'moment'

export enum NameRange {
  LastYear = 'Last Year',
  ThisYear = 'This Year',
  ThisMonth = 'This Month',
  ThisWeek = 'This Week'

}

/**
 * this function used to generate date range based on named range
 * @param nameRange enum NameRange
 * @returns dateRange { startDate: Date, endDate: Date }
 */
export const getDateRange = (nameRange: NameRange): { startDate: Date, endDate: Date } => {
  let startDate = new Date()
  let endDate = new Date()
  // endDate = '';
  switch (nameRange) {
    case NameRange.LastYear:
      startDate = new Date(moment().subtract(1, 'years').startOf('year').toString())
      endDate = new Date(moment().subtract(1, 'year').endOf('year').toString())
      return { startDate, endDate }
    case NameRange.ThisYear:
      startDate = new Date(moment().startOf('year').toString())
      endDate = new Date(moment().endOf('year').toString())
      return { startDate, endDate }
    case NameRange.ThisMonth:
      startDate = new Date(moment().subtract(1, 'month').startOf('month').toString())
      endDate = new Date(moment().subtract(1, 'month').endOf('month').toString())
      return { startDate, endDate }
    case NameRange.ThisWeek:
      startDate = new Date(moment().startOf('week').toString())
      endDate = new Date(moment().endOf('week').toString())
      return { startDate, endDate }
    default:
      return { startDate, endDate }
  }
}
