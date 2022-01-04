import React from "react";
import SearchForm from "../components/SearchForm";
import Stories from "../components/Stories";
import Buttons from "../components/Buttons";
import { Info, Repos, User, Search, Navbar } from "../components";
import loadingImage from "../images/preloader.gif";
import { PoliticsContext } from "../context/context";
const Dashboard = () => {
  const { isLoading } = React.useContext(PoliticsContext);
  if (isLoading) {
    return (
      <main>
        <Navbar />
        <Search />
        <img src={loadingImage} className="loading-img" alt="" />
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
      <SearchForm />
      <Buttons/>
      <Stories />
    </main>
  );
};

export default Dashboard;
