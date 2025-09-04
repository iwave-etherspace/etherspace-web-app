import React from 'react'
import NavButton from './NavButton'
import SectionDivider from './SectionDivider'
const NavSection = ({children,label}) => {
  return (
    <nav className="grid">

        <SectionDivider/>

        <div className="text-[rgba(0,0,0,0.4)] text-xs font-normal">{label}</div>

        <div className="mt-4 grid justify-center">
            {children}
        </div>

    </nav>
  )
}

export default NavSection