import React from "react";

const SearchBar = ({ handleSearch }) => {
  return (
    <div className="mb3 bg-white pb3 tc shadow-5">
      <div className="pv1 bg-gray white f3 pl3 tl fw3 mb2">search</div>
      <input
        type="searchbar"
        placeholder="search here..."
        className=" mt2 tc pv1 f4 bg-transparent  w-90 b--gray pointer"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
