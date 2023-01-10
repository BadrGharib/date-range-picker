import React, { useState } from 'react'
import { _getexchangeRate } from '../../apis/exchangeRate'
import DateRangePicker from '../../components/UIElements/DateRangePicker/DateRangePicker'
import Grid from '../../components/UIElements/Grid/Grid'
import Spinner from '../../components/UIElements/Spinner/Spinner'
import style from './ExchangeRate.module.scss'

const ExchangeRate: React.FC = () => {
  const [rates, setRates] = useState<object[] | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const handelChangeDateRange = (startDate: Date, endDate: Date): void => {
    setIsLoading(true)
    _getexchangeRate(startDate, endDate)
      .then((response) => {
        const rates: object[] = []
        Object.keys(response.rates).forEach((rateKey) => {
          const { EGP, CAD } = response.rates[rateKey]
          rates.push({ Date: rateKey, EGP, CAD })
        })
        setRates(rates)
        console.log(`Rates = ${JSON.stringify(response)}`)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setIsLoading(false)
      })
  }
  return (
    <div className={style.exchangeRate}>
      <h1>Exchange Rate</h1>
      <DateRangePicker
        startButtonText="Start"
        endButtonText="End"
        onChange={handelChangeDateRange}
      />
      <div className={style.exchangeRate_result}>
       {
        isLoading
          ? <Spinner/>
          : rates !== null && <Grid data={rates} />
       }
      </div>
    </div>
  )
}

export default ExchangeRate
