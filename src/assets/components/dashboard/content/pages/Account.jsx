import React, { useState } from 'react'
import MainContent from '../content-component/MainContent'
import ContentCell from '../content-component/maincontent/ContentCell'
import BalanceHistory from './history/BalanceHistory'
import RadioButtonGroup from '../../side/sidebar-components/RadioButtonGroup'
import RadioButton from '../../side/sidebar-components/RadioButton'
import MyAccount from './account/MyAccount'
import MyBank from './account/MyBank'
import Security from './account/Security'

const Account = () => {
    const activeAccountContentState = useState('My Account');
    const activeAccountContent = activeAccountContentState[0];
    const group = "account";

    const accountNavButtonColors={
        blank:"bg-white"
    }

    return (
        <MainContent>
            <div className="h-full grid grid-flow-col md:grid-cols-[8rem_7fr] content-start gap-4 bg-white rounded-lg p-5">

                <ContentCell className={"md:col-start-1 md:col-span-1 col-span-1"}>
                    <nav className="grid grid-cols-1 place-items-start max-md:mt-[1.5rem]">
                        <RadioButtonGroup activeContentState={activeAccountContentState} group={group} label={"Account Settings"} buttonColors={accountNavButtonColors}>
                            <RadioButton value={"My Account"}/>
                            <RadioButton value={"My Bank"}/>
                            <RadioButton value={"Security"}/>
                        </RadioButtonGroup>
                    </nav>
                </ContentCell>

                <ContentCell className={"md:col-start-2 md:col-span-1 col-span-1"}>
                    {activeAccountContent==="My Account" ? <MyAccount/>:null}
                    {activeAccountContent==="My Bank" ? <MyBank/>:null}
                    {activeAccountContent==="Security" ? <Security/>:null}
                </ContentCell>

            </div>
        </MainContent>
    )
}

export default Account