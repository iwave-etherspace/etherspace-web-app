import React from 'react'
import ActionIcon from './ActionIcon'

const HeaderBar = () => {
  return (
    <header className="flex justify-between items-center gap-4">
        <div className="flex items-center bg-white rounded-lg flex-1 max-w-full h-full">
        <span className="ml-5 text-black text-base font-normal leading-5">ETHERSPACE - LOTTOMATIK</span>
        </div>

        <div className="flex items-center gap-4">
          <ActionIcon alt="Mail" src="src/assets/imgs/mail.png"/>
          <ActionIcon alt="Notifications" src="src/assets/imgs/bell.png"/>

        <div className="user-profile">
            <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/9443d5aaaf6b105f50176c4d45f85baee5b60888?width=90"
            alt="User"
            className="user-avatar"
            />
            <div className="user-info">
            <div className="user-name">Sharmaine Kho</div>
            <div className="user-contact">+(63) 913 142 5241</div>
            </div>
        </div>
        </div>
    </header>
  )
}

export default HeaderBar