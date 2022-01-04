import React, { useState, useEffect, useReducer } from "react";
import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "../components/actions";
import reducer from "../components/reducer";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const initialState = {
  isSpinnerLoading: true,
};

const PoliticsContext = React.createContext();

// Provider, Consumer - PoliticsContext.Provider

const PoliticsProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);
  const [requests, setRequests] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: "" });
  const [state, dispatch] = useReducer(reducer, initialState);

  // const checkRequest = () => {
  //   axios(`${rootUrl}/rate_limit`)
  //     .then((data) => {
  //       console.log()
  //     })
  //     .catch((err) => console.log(err));
  // };

  const fetchStories = async (url) => {
    dispatch({ type: SET_LOADING });
  };

  const searchUser = async (user) => {
    toggleError();
    setIsLoading(true);
    console.log(user);
    const response = await axios(`${rootUrl}/users/${user}`).catch((err) =>
      console.log(err)
    );
    console.log(response);
    if (response) {
      setGithubUser(response.data);
      const { login, followers_url } = response.data;
      axios(`${rootUrl}/users/${login}/repos?per_page=100`).then((response) =>
        // console.log(response)
        setRepos(response.data)
      );
      axios(`${followers_url}?per_page=100`).then((response) =>
        // console.log(response)
        setFollowers(response.data)
      );
    } else {
      toggleError(true, "there is no user with that username");
    }
    checkRequest();
    setIsLoading(false);
  };

  const checkRequest = async () => {
    try {
      const { data } = await axios.get(`${rootUrl}/rate_limit`);
      console.log({ data });
      let {
        rate: { remaining },
      } = data;

      console.log("remaining", remaining);
      setRequests(remaining);
      if (remaining === 0) {
        toggleError(true, "Sorry, hourly requests rate has exceeded");
      }
    } catch (err) {}
  };

  function toggleError(show = false, msg = "") {
    setError({ show, msg });
  }

  useEffect(() => {
    checkRequest();
    fetchStories();
  }, []);
  return (
    <PoliticsContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        requests,
        error,
        searchUser,
        isLoading,
        ...state,
      }}
    >
      {children}
    </PoliticsContext.Provider>
  );
};

export { PoliticsProvider, PoliticsContext };
