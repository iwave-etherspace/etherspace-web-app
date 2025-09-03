import React from 'react'
import NavButton from './NavButton'
import SectionDivider from './SectionDivider'
const NavSection = ({children,label}) => {
  return (
    <nav className="nav-section">

        <SectionDivider/>

        <div className="nav-section-label">{label}</div>

        <div className="nav-items">
            {children}
        </div>

    </nav>
  )
}

export default NavSection