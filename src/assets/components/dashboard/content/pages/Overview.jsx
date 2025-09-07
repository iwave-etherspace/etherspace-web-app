import React from 'react'
import MainContent from '../content-component/MainContent'
import ContentCell from '../content-component/maincontent/ContentCell'
import PaymentHistory from './history/PaymentHistory'
import BalanceHistory from './history/BalanceHistory'
import BalanceCard from './overview/BalanceCard'
import LotterySection from './overview/LotterySection'

const Overview = () => {
  return (
    <MainContent>
        <div className="h-full grid md:grid-cols-5 grid-cols-1 md:grid-rows-[repeat(2,auto)] max-md:grid-flow-row content-start gap-4">

            <ContentCell className={"md:row-start-1 md:col-start-1 md:col-span-2 col-span-1"}>
                <BalanceCard balanceAmount={"₱ 3,027.00"}/>
            </ContentCell>
            <ContentCell className={"md:row-start-1 md:col-start-3 md:col-span-3 col-span-1"}>
                <LotterySection/>
            </ContentCell>
            <ContentCell className={"md:row-start-2 md:col-start-4 md:col-span-2 col-span-1"}>
                <BalanceHistory overviewMode={true}/>
            </ContentCell>

            <ContentCell className={"md:row-start-2 md:col-start-1 md:col-span-3 col-span-1"}>
                <PaymentHistory overviewMode={true}/>
            </ContentCell>

        </div>
    </MainContent>
  )
}

export default Overview