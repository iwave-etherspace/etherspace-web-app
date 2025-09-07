import React from 'react'
import MainContent from '../content-component/MainContent'
import ContentCell from '../content-component/maincontent/ContentCell'
import BalanceHistory from './history/BalanceHistoryDepr'

import PaymentHistory from './history/PaymentHistoryDepr'



const HistoryPage = () => {
  return (
    <MainContent>
        {/* <div className="h-full grid grid-rows-[repeat(2,auto)] content-start gap-4"> */}
        <div className="h-full grid grid-flow-row content-start gap-4">
            <ContentCell cStart={1} cSpan={1} rSpan={1}>
                <BalanceHistory />
            </ContentCell>
            <ContentCell cStart={1} cSpan={1} rSpan={1}>
                <PaymentHistory />
            </ContentCell>
        </div>
    </MainContent>
  )
}

export default HistoryPage