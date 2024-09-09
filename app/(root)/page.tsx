import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "MA", lastName: "Rizwan", email:"ma12@gmail.com" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your accont and transaction efficiently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={3960}
          />
        </header>
        RECENT Transactions
      </div>
      <RightSidebar user={loggedIn} transactions={[]} banks={[{currentBalance:123.50},{currentBalance:234.67}]} />
    </section>
  );
};

export default Home;
