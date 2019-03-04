import React from "react";
import SortByPanel from "./SortByPanel";
import SearchBar from "./SearchBar";

const FilterAndSort = ({ handleSearch, handleSortBy }) => {
  return (
    <div className="w-20 h-50 bg-white pb3 tc shadow-5">
      <SearchBar handleSearch={handleSearch} />
      <SortByPanel handleSortBy={handleSortBy} />
    </div>
  );
};

export default FilterAndSort;
