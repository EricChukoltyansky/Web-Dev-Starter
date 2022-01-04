import React from "react";
import { Info, Repos, User, Search, Navbar, News } from "../components";
import loadingImage from "../images/preloader.gif";
import { PoliticsContext } from "../context/context";
const Dashboard = () => {
  const { isLoading } = React.useContext(PoliticsContext);
  if (isLoading) {
    return (
      <main>
        <Navbar />
        <Search />
        <img src={loadingImage} className="loading-img" alt="loading" />
      </main>
    );
  }
  return (
    <main>
      <Navbar></Navbar>
      <Search />
      <Info />
      <User />
      <Repos />
      <News />
    </main>
  );
};

export default Dashboard;
