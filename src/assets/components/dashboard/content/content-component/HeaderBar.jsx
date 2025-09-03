import React from 'react'

const HeaderBar = () => {
  return (
    <header className="flex justify-between items-center gap-4">
        <div className="flex items-center bg-white rounded-lg flex-1 max-w-full h-full">
        <span className="ml-5 text-black text-base font-normal leading-5">ETHERSPACE - LOTTOMATIK</span>
        </div>

        <div className="flex items-center gap-4">
        <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/9fbff120a9eeb929ff63384ddae92f39a0c925d7?width=66"
            alt="Mail"
            className="action-icon"
        />
        <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/0d1e44ba6c7e5dd18fc9ebe508a33feb2d609573?width=60"
            alt="Notifications"
            className="action-icon"
        />

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