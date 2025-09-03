import React from 'react'
import HeaderBar from './content-component/HeaderBar'
import WelcomeSection from './content-component/WelcomeSection'
import MainContent from './content-component/MainContent'
import Overview from './pages/Overview'


const DashboardContent = () => {
  return (
    <main className="grid grid-cols-1 grid-rows-[auto_auto_3fr]">
        <HeaderBar userName={"Sharmaine Kho"} userContact={"+(63) 913 142 5241"} src={"src/assets/imgs/default-avatar-female.png"}/>
        <WelcomeSection/>
        <Overview/>
    </main>
  )
}

export default DashboardContent