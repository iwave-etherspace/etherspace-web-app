import React from 'react'
import RadioButton from './RadioButton'

const RadioButtonGroup = ({label,children}) => {
  return (
    <>
      <div className="text-[rgba(0,0,0,0.4)] text-xs font-normal">{label}</div>
        {children}
      
    </>
  )
}

export default RadioButtonGroup