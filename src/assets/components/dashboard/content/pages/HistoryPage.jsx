import React from 'react'
import MainContent from '../content-component/MainContent'
import ContentCell from '../content-component/maincontent/ContentCell'
import BalanceHistory from './history/BalanceHistory'
import PaymentHistory from './history/PaymentHistory'

const HistoryPage = () => {
  return (
    <MainContent>
        <div className="h-full grid grid-rows-[repeat(2,auto)] content-start gap-4">
            <ContentCell rStart={1} cSpan={1} rSpan={1}>
                <BalanceHistory />
            </ContentCell>
            <ContentCell rStart={2} cSpan={1} rSpan={1}>
                <PaymentHistory />
            </ContentCell>
        </div>
    </MainContent>
  )
}

export default HistoryPage