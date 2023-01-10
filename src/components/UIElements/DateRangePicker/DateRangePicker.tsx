import React, { useState, useEffect } from 'react'
import Button from '../../FormElements/Button/Button'
import style from './DateRangePicker.module.scss'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { getDateRange, NameRange } from '../../../utils/helper'
import moment from 'moment'

interface DateRangePickerProps {
  startButtonText: string
  endButtonText: string
  startButtonClass?: string
  endButtonClass?: string
  startCalenderClass?: string
  endCalenderClass?: string
  thisYearNameRangeClass?: string
  thisMonthNameRangeClass?: string
  thisWeekNameRangeClass?: string
  dayClass?: string
  onChange?: (startDate: Date, endDate: Date) => void
  onClick?: () => void
}
const DateRangePicker: React.FC<DateRangePickerProps> = ({
  onChange,
  onClick,
  startButtonText,
  endButtonText,
  startButtonClass,
  endButtonClass,
  startCalenderClass,
  endCalenderClass,
  thisYearNameRangeClass,
  thisMonthNameRangeClass,
  thisWeekNameRangeClass,
  dayClass
}) => {
  const [showCalender, setShowCalender] = useState(false)
  const [startDate, setstartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)

  useEffect(() => {
    checkIfDateRangeChanged()
  }, [startDate, endDate])

  const handelClick = (): void => {
    setShowCalender((prevShowCalender) => !prevShowCalender)
  }
  const handelChangeStartDate = (date: Date): void => {
    setstartDate(date)
    onClick?.()
  }
  const handelChangeEndDate = (date: Date): void => {
    setEndDate(date)
    onClick?.()
  }
  const checkIfDateRangeChanged = (): void => {
    // remove time to compare based on date only
    startDate?.setHours(0, 0, 0, 0)
    endDate?.setHours(0, 0, 0, 0)
    if (startDate && endDate && startDate <= endDate) {
      onChange?.(startDate, endDate)
      setShowCalender(false)
    }
  }
  const handelNameRageClicked = (nameRange: NameRange): void => {
    const dateRange = getDateRange(nameRange)
    setstartDate(dateRange.startDate)
    setEndDate(dateRange.endDate)
  }
  return (
    <div className={style.dateRangePicker}>
      <Button
        onClick={handelClick}
        className={`${style.dateRangePicker_start} ${startButtonClass ?? ''} ${startDate !== null && style.dateRangePicker_startEnd__selected}`}
      >
        {`${startDate === null ? startButtonText : moment(startDate).format('DD-MM-YYYY')}`}
      </Button>
      <Button
        onClick={handelClick}
        className={`${style.dateRangePicker_end} ${endButtonClass ?? ''} ${endDate !== null && style.dateRangePicker_startEnd__selected}`}
      >
        {`${endDate === null ? endButtonText : moment(endDate).format('DD-MM-YYYY')}`}
      </Button>

      {showCalender && (
        <div className={style.dateRangePicker_datesPicker}>
          <div className={style.dateRangePicker_namedRanges}>
          <Button className={`${style.dateRangePicker_namedRanges__namedRangeBtn} ${thisWeekNameRangeClass ?? ''}`} onClick={() => handelNameRageClicked(NameRange.LastYear)}>Last Year</Button>
           <Button className={`${style.dateRangePicker_namedRanges__namedRangeBtn} ${thisYearNameRangeClass ?? ''}`} onClick={() => handelNameRageClicked(NameRange.ThisYear)}>This Year</Button>
           <Button className={`${style.dateRangePicker_namedRanges__namedRangeBtn} ${thisMonthNameRangeClass ?? ''}`} onClick={() => handelNameRageClicked(NameRange.ThisMonth)}>This Month</Button>
           <Button className={`${style.dateRangePicker_namedRanges__namedRangeBtn} ${thisWeekNameRangeClass ?? ''}`} onClick={() => handelNameRageClicked(NameRange.ThisWeek)}>This week</Button>
          </div>
         <div className={style.dateRangePicker_calenders}>
            <DatePicker
              selected={startDate ?? new Date()}
              onChange={handelChangeStartDate}
              inline
              calendarClassName={`${style.dateRangePicker_calenders__calendarStart} ${startCalenderClass ?? ''}`}
              dayClassName={() => `${style.dateRangePicker_calenders__day} ${dayClass ?? ''}`}
            />
            <DatePicker
              selected={endDate}
              minDate={startDate}
              onChange={handelChangeEndDate}
              inline
              calendarClassName={`${style.dateRangePicker_calenders__calendarEnd} ${endCalenderClass ?? ''}`}
              dayClassName={() => `${style.dateRangePicker_calenders__day} ${dayClass ?? ''}`}
            />
        </div>
        </div>

      )}
    </div>
  )
}

export default DateRangePicker
