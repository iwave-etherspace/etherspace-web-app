import React from 'react'
import HeaderBar from './content-component/HeaderBar'
import WelcomeSection from './content-component/WelcomeSection'
import MainContent from './content-component/MainContent'
import Overview from './pages/Overview'


const DashboardContent = () => {
  return (
    <main className="grid grid-cols-1 grid-rows-[auto_auto_3fr]">
        <HeaderBar/>
        <WelcomeSection/>
        <Overview/>
    </main>
  )
}

export default DashboardContent