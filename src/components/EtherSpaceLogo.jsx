import React from 'react'

  const EtherSpaceLogo = () => {
    return (
      <div className="grid grid-cols-1 place-items-center">
        <img
          src="/ether-logo-bg.png" // Background logo
          alt=""
          className="rounded-[2%] row-start-1 col-start-1 w-36 h-15 object-cover"
        />
        <img
          src="/ether-logo-white.png" // White icon logo
          alt="Ether Space Logo"
          className="w-25 h-12 object-contain z-10 row-start-1 col-start-1"
        />
      </div>
    );
  };

export default EtherSpaceLogo