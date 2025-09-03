import React from 'react'
import HeaderBar from './content-component/HeaderBar'
import WelcomeSection from './content-component/WelcomeSection'
import MainContent from './content-component/MainContent'
import Overview from './pages/Overview'


const DashboardContent = () => {
  return (
    <main className="dashboard-content">
        <HeaderBar/>

        <WelcomeSection/>

        <Overview/>
    </main>
    
   //<main className="main-content"></main>
  )
}

export default DashboardContent