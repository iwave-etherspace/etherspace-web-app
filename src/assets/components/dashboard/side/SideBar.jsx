import React from 'react'
import SectionDivider from './sidebar-components/SectionDivider'
import NavSection from './sidebar-components/NavSection'
import NavButton from './sidebar-components/NavButton'
import EtherSpaceLogo from './sidebar-components/EtherSpaceLogo'

const SideBar = () => {
  return (
    <aside className="grid grid-rows-[auto_3fr_auto] content-center justify-center">
        
        <EtherSpaceLogo/>

        {/* Navigation Content */}
        <div className="flex flex-col gap-4">

            <NavSection label="Menu">
                <NavButton label="Overview" iconIdx={true} isActive={true}/>
                <NavButton label="History" iconIdx={true}/>
                <NavButton label="My Account" iconIdx={true}/>
            </NavSection>
     

            <NavSection label="General">
                <NavButton label="Dashboard Settings"/>
                <NavButton label="Help"/>
                <NavButton label="Log Out"/>
            </NavSection>
        </div>

        <div className="text-[#091237] text-[10px] font-normal leading-5 self-end">powered by: etherspace</div>
    </aside>
  )
}

export default SideBar