import React from 'react'
import MainContent from '../content-component/MainContent'
import ContentCell from '../content-component/maincontent/ContentCell'
import BalanceHistory from './history/BalanceHistory'
import PaymentHistory from './history/PaymentHistory'



const HistoryPage = () => {
  return (
    <MainContent>
        <div className="h-full grid grid-flow-row content-start gap-4">
            <ContentCell>
                <BalanceHistory />
            </ContentCell>
            <ContentCell>
                <PaymentHistory />
            </ContentCell>
        </div>
    </MainContent>
  )
}

export default HistoryPage