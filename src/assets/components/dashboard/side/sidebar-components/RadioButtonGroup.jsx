import React, { useCallback } from 'react'
import RadioButton from './RadioButton'

const RadioButtonGroup = ({
  buttonColors,
  activeContentState,group,label,children}) => {

  let childrenWithProperties = React.Children.map(children, child => {
    
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { 
        activeContentState:activeContentState,
        group:group,
        buttonColors:buttonColors
      });
    }
    return child;
  });
  return (
    <>
      <div className="text-[rgba(0,0,0,0.4)] text-xs font-normal mb-3">{label}</div>
        {childrenWithProperties}
      
    </>
  )
}

export default RadioButtonGroup