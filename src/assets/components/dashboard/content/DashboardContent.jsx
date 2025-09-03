import React from 'react'
import HeaderBar from './content-component/HeaderBar'
import WelcomeSection from './content-component/WelcomeSection'
import MainContent from './content-component/MainContent'
import Overview from './pages/Overview'


const DashboardContent = () => {
  return (
    <main className="grid grid-cols-1 grid-rows-[auto_auto_3fr]">
        {/* <HeaderBar/>

        <WelcomeSection/>

        <Overview/> */}
        <HeaderBar/>
        <WelcomeSection/>

        <div className='bg-red-500'></div>
    </main>
    
   //<main className="main-content"></main>
  )
}

export default DashboardContent