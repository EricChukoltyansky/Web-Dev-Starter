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
  const [requests, setRequests] = useState(0);
  const [loading, setIsLoading] = useState(false);

  // const checkRequest = () => {
  //   axios(`${rootUrl}/rate_limit`)
  //     .then((data) => {
  //       console.log()
  //     })
  //     .catch((err) => console.log(err));
  // };

  const checkRequest = async () => {
    try {
      const {data} = await axios.get(`${rootUrl}/rate_limit`);
      console.log({data})
      let {rate:{remaining}} = data;
      console.log("remaining",remaining)
      setRequests(remaining)
      if(remaining === 0) {

      }
    } catch (err) {}
  };

  useEffect(() => {
    checkRequest();
  }, []);
  return (
    <PoliticsContext.Provider value={{ githubUser, repos, followers, requests, loading }}>
      {children}
    </PoliticsContext.Provider>
  );
};

export { PoliticsProvider, PoliticsContext };
