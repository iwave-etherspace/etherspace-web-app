import React, { useState } from "react";
import MainContent from "../content-component/MainContent";
import ContentCell from "../content-component/maincontent/ContentCell";
import RadioButtonGroup from "../../side/sidebar-components/RadioButtonGroup";
import RadioButton from "../../side/sidebar-components/RadioButton";
import MyAccount from "./account/MyAccount";
import MyBank from "./account/MyBank";
import Security from "./account/Security";

const Account = () => {
  const activeAccountContentState = useState("My Account");
  const activeAccountContent = activeAccountContentState[0];
  const group = "account";

  const accountNavButtonColors = {
    blank: "bg-white",
  };

  return (
    <MainContent>
      <div className="flex gap-2">
        {/* Nav Card */}
        <div className="w-31 md:w-48 shrink-0 bg-white rounded-lg p-5 shadow">
          <nav className="grid grid-cols-1 place-items-start">
            <RadioButtonGroup
              activeContentState={activeAccountContentState}
              group={group}
              label={"Account Settings"}
              buttonColors={accountNavButtonColors}
            >
              <RadioButton value={"My Account"} />
              <RadioButton value={"My Bank"} />
              <RadioButton value={"Security"} />
            </RadioButtonGroup>
          </nav>
        </div>

        {/* Content Card */}
        <div className="flex-1 bg-white rounded-lg p-4 pt-0 shadow">
          {activeAccountContent === "My Account" && <MyAccount />}
          {activeAccountContent === "My Bank" && <MyBank />}
          {activeAccountContent === "Security" && <Security />}
        </div>
      </div>
    </MainContent>
  );
};

export default Account;
