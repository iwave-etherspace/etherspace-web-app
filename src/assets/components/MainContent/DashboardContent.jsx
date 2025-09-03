import React from 'react'
import HeaderBar from './HeaderBar'
import WelcomeSection from './WelcomeSection'
import MainContent from './MainContent'


const DashboardContent = () => {
  return (
    <main className="dashboard-content">
        <HeaderBar/>

        <WelcomeSection/>

        <MainContent/>
    </main>
    
   //<main className="main-content"></main>
  )
}

export default DashboardContent