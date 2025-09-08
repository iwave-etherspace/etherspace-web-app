import React from 'react'
import MainContent from '../content-component/MainContent'
import ContentCell from '../content-component/maincontent/ContentCell'
import BalanceHistory from './history/BalanceHistory'

const MyAccount = () => {
  return (
    <MainContent>
        <div className="h-full grid grid-flow-row content-start gap-4">

            <ContentCell>
                MY 
            </ContentCell>

            <ContentCell>ACCOUNT</ContentCell>
        </div>
    </MainContent>
  )
}

export default MyAccount