import React from "react";
import Banner from "@/components/Banner";
import SummaryCards from "@/components/SummaryCards";
import FriendsGrid from "@/components/FriendsGrid";

const Home = () => {
  return (
    <div>
      <Banner />
      <SummaryCards />
      <FriendsGrid />
    </div>
  );
};

export default Home;
