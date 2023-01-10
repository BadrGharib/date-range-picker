import React, { ReactNode } from 'react'
import style from './Row.module.scss'

interface RowProps {
  data: any[]
  rowColor?: string
  isHeader?: boolean
  isOdd?: boolean
}
const Row: React.FC <RowProps> = ({ data, rowColor, isHeader, isOdd }) => {
  return (
     <div className={`${style.row} ${isHeader && style.header} ${isOdd && style.odd}`} style={rowColor ? { backgroundColor: rowColor } : {}}>
    {
       data.map((value, indx) => {
         return <div className={style.col} key={indx}>{value as ReactNode}</div>
       })
    }
   </div>
  )
}

export default Row
