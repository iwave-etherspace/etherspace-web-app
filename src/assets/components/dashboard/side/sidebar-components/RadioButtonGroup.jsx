import React from 'react'
import RadioButton from './RadioButton'

const RadioButtonGroup = ({activeContentState,group,label,children}) => {
  let childrenWithProperties = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { activeContentState,group });
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