import React from "react";

const SearchBar = ({ handleSearch }) => {
  return (
    <div className="mb4">
      <div className="pv1 bg-gray white f3 pl3 tl fw3 mb2">search</div>
      <input
        type="searchbar"
        placeholder="🔍 items here..."
        className=" mt2 tc f4 bg-near-white w-90 shadow-5 dim "
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
