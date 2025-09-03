import React from 'react'
import SectionDivider from './SectionDivider'
import NavSection from './NavSection'
import NavButton from './NavButton'

const SideBar = () => {
  return (
    <aside className="sidebar">
        <div className="sidebar-header">
            <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/bc72943c22f9f82df59c1d764882689624d716ce?width=360"
            alt=""
            className="header-background"
            />
            <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/018e17d04b95a31914707df155eeac2228005424?width=134"
            alt="Ether logo"
            className="logo"
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