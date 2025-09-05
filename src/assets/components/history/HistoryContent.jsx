import React from "react";
import HeaderBar from "../dashboard/content/content-component/HeaderBar";
import WelcomeSection from "../dashboard/content/content-component/WelcomeSection";
import PaymentHistory from "./content/PaymentHistory";
import BalanceHistory from "./content/BalanceHistory";

const HistoryContent = ({ firstName, lastName, userContact, profileImage }) => {
  return (
    <main className="grid grid-cols-1 grid-rows-[auto_auto_3fr]">
      <HeaderBar
        userName={firstName + " " + lastName}
        userContact={userContact}
        src={profileImage}
      />
      <WelcomeSection firstName={firstName} />
      <BalanceHistory />
      <PaymentHistory />
    </main>
  );
};

export default HistoryContent;
