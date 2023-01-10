import React from 'react'
import style from './Button.module.scss'

interface ButtonProps extends React.ComponentProps<'button'> {
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={`${style.button} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button
