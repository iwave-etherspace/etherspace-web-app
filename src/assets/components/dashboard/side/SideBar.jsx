import React from 'react'
import SectionDivider from './sidebar-components/SectionDivider'
import NavSection from './sidebar-components/NavSection'
import NavButton from './sidebar-components/NavButton'

const SideBar = () => {
  return (
    <aside className="grid grid-rows-[auto_3fr_auto] p-[28px_26px_28px] bg-white">
        <div className="grid place-items-center mb-8">
            <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/bc72943c22f9f82df59c1d764882689624d716ce?width=360"
            alt=""
            className="w-full h-[75px] rounded-[15px] row-start-1 col-start-1"
            />
            <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/018e17d04b95a31914707df155eeac2228005424?width=134"
            alt="Ether logo"
            className="w-[67px] h-[53px] z-10 row-start-1 col-start-1"
            />
        </div>

        {/* Navigation Content */}
        <div className="sidebar-content">            
            <NavSection label="Menu">
                <NavButton label="Overview" iconIdx={true} isActive={true}/>
                <NavButton label="History"/>
                <NavButton label="My Account"/>
            </NavSection>

            <NavSection label="General">
                <NavButton label="Dashboard Settings"/>
                <NavButton label="Help"/>
                <NavButton label="Log Out"/>
            </NavSection>
        </div>

        <div className="powered-by">powered by: etherspace</div>
    </aside>
  )
}

export default SideBar