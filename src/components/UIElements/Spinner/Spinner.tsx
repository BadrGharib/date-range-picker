import React from 'react'
import style from './Spinner.module.scss'
interface SpinnerProps {
  className?: string
}
const Spinner: React.FC<SpinnerProps> = ({ className }) => {
  return <div className={`${style.spinner} ${className ?? ''}`}/>
}

export default Spinner
