import React from 'react'
import SectionDivider from './sidebar-components/SectionDivider'
import NavSection from './sidebar-components/NavSection'
import NavButton from './sidebar-components/NavButton'
import EtherSpaceLogo from './sidebar-components/EtherSpaceLogo'

const SideBar = ({activeContentState}) => {
  return (
    <aside className="grid grid-rows-[auto_3fr_auto] content-center justify-center">
        
        <EtherSpaceLogo/>

        <NavSection activeContentState={activeContentState}/>

    </aside>
  )
}

export default SideBar