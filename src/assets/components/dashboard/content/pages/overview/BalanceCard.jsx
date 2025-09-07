import React from 'react'

const BalanceCard = ({balanceAmount}) => {
  return (
    <div className="
        bg-[linear-gradient(106deg,#bf5e3c_7.76%,#3f191b_84.82%)]
        text-white
        rounded-[10px] 
        shadow-[0_4px_15px_rgba(0,0,0,0.1)] 
        p-5
        flex
        flex-col
        gap-4
        box-border">

        <div className="text-lg font-normal leading-5">My Balance</div>
        <div className="text-4xl font-bold leading-5">{balanceAmount}</div>
        <div className="flex mt-auto">
            <button className="
            w-fill
            bg-white
            hover:bg-white/80
            py-2
            rounded-[10px] border-none
            text-etherspace-orange
            text-[12px] 
            font-normal leading-5 cursor-pointer flex-1 min-w-[100px]">Request Payout</button>
        </div>

    </div>
  )
}

export default BalanceCard