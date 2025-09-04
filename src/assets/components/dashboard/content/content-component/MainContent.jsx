import React from 'react'

const MainContent = ({children}) => {
  return (
    // <div className="grid grid-cols-[minmax(320px,485px),1fr] gap-6">
    <div className="grid grid-cols-1 gap-6">
        {children}
    </div>
  )
}

export default MainContent