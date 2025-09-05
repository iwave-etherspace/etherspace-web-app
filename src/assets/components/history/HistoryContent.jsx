import React from "react";
import HeaderBar from "../dashboard/content/content-component/HeaderBar";
import WelcomeSection from "../dashboard/content/content-component/WelcomeSection";

const HistoryContent = ({ firstName, lastName, userContact, profileImage }) => {
  return (
    <main>
      <HeaderBar
        userName={firstName + " " + lastName}
        userContact={userContact}
        src={profileImage}
      />
      <WelcomeSection firstName={firstName} />
    </main>
  );
};

export default HistoryContent;
