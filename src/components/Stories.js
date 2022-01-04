import React from "react";

import { PoliticsContext } from "../context/context";

const Stories = () => {
  const { isSpinnerLoading, isLoading } = React.useContext(PoliticsContext);

  console.log("isSpinnerLoading", isSpinnerLoading);
  console.log("isLoading", isLoading);

  if (isSpinnerLoading) {
    return <div className="loading"></div>;
  }

  return <h2>stories component</h2>;
};

export default Stories;
