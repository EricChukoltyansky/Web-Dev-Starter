import React, { useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const PoliticsContext = React.createContext();

// Provider, Consumer - PoliticsContext.Provider

const PoliticsProvider = ({ children }) => {
  return (
    <PoliticsContext.Provider value={"hello"}>
      {children}
    </PoliticsContext.Provider>
  );
};

export { PoliticsProvider, PoliticsContext };
