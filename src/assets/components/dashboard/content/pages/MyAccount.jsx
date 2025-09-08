import React from 'react'
import MainContent from '../content-component/MainContent'
import ContentCell from '../content-component/maincontent/ContentCell'

const MyAccount = () => {
  return (
    <MainContent>
        <div className="h-full grid grid-flow-row content-start gap-4">

            <ContentCell></ContentCell>

            <ContentCell></ContentCell>
        </div>
    </MainContent>
  )
}

export default MyAccount