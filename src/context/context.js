import React, { useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const PoliticsContext = React.createContext();

// Provider, Consumer - PoliticsContext.Provider

const PoliticsProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);
  return (
    <PoliticsContext.Provider value={{ githubUser, repos, followers }}>
      {children}
    </PoliticsContext.Provider>
  );
};

export { PoliticsProvider, PoliticsContext };
