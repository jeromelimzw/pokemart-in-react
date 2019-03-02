import React from "react";

const SearchBar = ({ handleSearch }) => {
  return (
    <div className="mb4">
      <span className="ma0 f3">SEARCH</span>
      <hr className="w-40 ma1 mb3 center" />
      <input
        type="searchbar"
        placeholder="🔍 items here..."
        className=" tc f3 bw1 bg-near-white w-90 shadow-5 pv2 dim "
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
