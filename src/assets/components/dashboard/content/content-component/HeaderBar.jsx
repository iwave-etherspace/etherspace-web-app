import React from 'react'
import ActionIcon from './headerbar/ActionIcon'
import UserProfileIcon from './headerbar/UserProfileIcon'

const HeaderBar = ({userName,userContact,src}) => {
  return (
    <header className="flex justify-between items-center gap-4">
        <div>
          <ActionIcon alt="Sidebar Collapse Button" src="src/assets/imgs/nav/burger.png"/>
          <img 
            alt=""
            src=""></img>
        </div>
        <div className="flex items-center bg-white rounded-lg flex-1 max-w-full h-full">
          <span className="ml-5 text-black text-base font-normal leading-5">ETHERSPACE - LOTTOMATIK</span>
        </div>
        <div className="flex items-center gap-4">
          <ActionIcon alt="Mail" src="src/assets/imgs/mail.png"/>
          <ActionIcon alt="Notifications" src="src/assets/imgs/bell.png"/>
          <UserProfileIcon userName={userName} userContact={userContact} src={src}/>
        </div>
    </header>
  )
}

export default HeaderBar