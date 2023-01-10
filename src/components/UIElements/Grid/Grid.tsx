import React from 'react'
import style from './Grid.module.scss'
import Row from './Row'

interface GridProps {
  data: object[]
}
const Grid: React.FC <GridProps> = ({ data }) => {
  const keys = Object.keys(data[0] || {})
  return (
    <div className={style.grid}>
      <Row data={keys} isHeader/>
      {
        data.map((rowData, indx) => {
          return <Row key={indx} isOdd={indx % 2 > 0} data={Object.values(rowData)}/>
        })
      }
    </div>
  )
}

export default Grid
