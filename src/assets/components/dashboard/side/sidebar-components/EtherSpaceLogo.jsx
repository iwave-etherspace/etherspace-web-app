import React from 'react'

const EtherSpaceLogo = () => {
  return (
    <div className="grid grid-cols-1 place-items-center max-md:hidden">
        <img
          src="src/assets/imgs/ether-logo-bg.png"
          alt=""
          className="rounded-[2%] row-start-1 col-start-1"
        />
        <img
          src="src/assets/imgs/ether-logo-white.png"
          alt="Ether logo"
          className="w-40/100 object-contain z-10 row-start-1 col-start-1"
        />
    </div>
  )
}

export default EtherSpaceLogo