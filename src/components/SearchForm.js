import React from "react";
// import { PoliticsContext } from "./context";
import { PoliticsContext } from "../context/context";

const SearchForm = () => {
  const { query, handleSearch } = React.useContext(PoliticsContext);

  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        className="form-input"
        value={query}
        placeholder="Search for Tech News"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
