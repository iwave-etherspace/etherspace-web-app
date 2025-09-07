import React from 'react'

const UserProfileIcon = ({src,userName,userContact}) => {
  return (
    <div className="flex items-center 
                    gap-[0.5rem] 
                    p-[0.7rem_0.9rem_0.7rem] 
                    rounded-2xl
                    md:w-[14rem]
                    h-full shrink-0 bg-etherspace-gradient">
        <img
        src={src}
        alt="User"
        className="w-[2.81rem] h-full rounded-full"
        />
        <div className="flex flex-col flex-1 max-md:hidden">
          <div className="text-white text-sm font-bold leading-5">{userName}</div>
          <div className="text-white text-xs font-normal leading-5">{userContact}</div>
        </div>
    </div>
  )
}

export default UserProfileIcon