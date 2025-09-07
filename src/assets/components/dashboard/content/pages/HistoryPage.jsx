import React from 'react'
import MainContent from '../content-component/MainContent'
import ContentCell from '../content-component/maincontent/ContentCell'
import BalanceHistory from './history/BalanceHistory'
import BalanceHistory2 from './history/BalanceHistory2'
import PaymentHistory from './history/PaymentHistory'
import PaymentHistory2 from './history/PaymentHistory2'
import HistoryTable from './history/HistoryTable'

const HistoryPage = () => {
  return (
    <MainContent>
        {/* <div className="h-full grid grid-rows-[repeat(2,auto)] content-start gap-4"> */}
        <div className="h-full grid grid-flow-row content-start gap-4">
            <ContentCell cStart={1} cSpan={1} rSpan={1}>
                <BalanceHistory2 />
            </ContentCell>
            <ContentCell cStart={1} cSpan={1} rSpan={1}>
                <PaymentHistory2 />
            </ContentCell>
        </div>
    </MainContent>
  )
}

export default HistoryPage