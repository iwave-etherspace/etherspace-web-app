import React from 'react'
import HeaderBar from './content-component/HeaderBar'
import WelcomeSection from './content-component/WelcomeSection'
import MainContent from './content-component/MainContent'
import Overview from './pages/Overview'


const DashboardContent = ({firstName,lastName,userContact,profileImage}) => {
  return (
    <main className="h-full grid grid-cols-1 grid-rows-[auto_auto_3fr]">
        <HeaderBar userName={firstName+" "+lastName} userContact={userContact} src={profileImage}/>
        <WelcomeSection firstName={firstName}/>
        <Overview/>
    </main>
  )
}

export default DashboardContent