import React from 'react'

const WelcomeSection = ({firstName}) => {
  let now = "27 Aug 2025 | 3:27 PM";
  return (
    <div className="m-12 grid grid-cols-[1fr_auto] items-center gap-6">
        <h1 className="text-black text-[18px] leading-5 font-[700]">Welcome, {firstName}</h1>
        <span className="text-black text-[18px] leading-5 font-[400]">{now}</span>
    </div>
  )
}

export default WelcomeSection