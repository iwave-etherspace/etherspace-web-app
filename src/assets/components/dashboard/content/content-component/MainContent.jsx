import React from 'react'

const MainContent = ({children}) => {
  return (
    <div className="grid grid-cols-[minmax(320px,485px),1fr] grid-rows-[auto,auto,auto] gap-6">
        {children}
    </div>
  )
}

export default MainContent