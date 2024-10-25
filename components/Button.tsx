import React from 'react'

type ButtonProps = {
  name: string;
  variant: string;
}

const Button = ({name, variant}: ButtonProps) => {
  return (
    <div className={`${variant} cursor-pointer hover:opacity-80 transition-opacity duration-300`}>
      {name}
    </div>
  )
}

export default Button