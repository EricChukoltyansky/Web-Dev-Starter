import React from "react";

import { PoliticsContext } from "../context/context";

const Buttons = () => {
  const { isSpinnerLoading, handlePage, nbPages, page } =
    React.useContext(PoliticsContext);
  return (
    <div className="btn-container">
      <button onClick={() => handlePage("dec")} disabled={isSpinnerLoading}>
        prev
      </button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button onClick={() => handlePage("inc")} disabled={isSpinnerLoading}>
        next
      </button>
    </div>
  );
};

export default Buttons;
