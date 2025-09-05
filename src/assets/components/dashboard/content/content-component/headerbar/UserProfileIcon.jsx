import React from 'react'

const UserProfileIcon = ({src,userName,userContact}) => {
  return (
    <div className="flex items-center gap-[10px] p-[11px_15px_12px] rounded-[15px] min-w-[200px] max-w-[250px] h-full shrink-0 bg-gradient-to-r from-[#BF5E3C] to-[#21102C]">
        <img
        src={src}
        alt="User"
        className="w-[2.81rem] h-full rounded-full"
        />
        <div className="flex flex-col flex-1">
          <div className="text-white text-sm font-bold leading-5">{userName}</div>
          <div className="text-white text-xs font-normal leading-5">{userContact}</div>
        </div>
    </div>
  )
}

export default UserProfileIcon